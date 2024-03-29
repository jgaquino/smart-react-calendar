import React, { useState, useRef, Fragment, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import moment from 'moment-timezone'
//locales
import locales from './locale/index'

import useGenerateDateStructureObject from './useGenerateDateStructureObject'
import useHelpers from './useHelpers'
import {
    CalendarStyled,
    HeaderStyled,
    HeaderYearStyled,
    HeaderDateSelectedStyled,
    HeaderBtnTodayStyled,
    WeekDaysStyled,
    WeekDaysTextStyled,
    CalendarDaysContainerStyled,
    MonthTitleStyled,
    MonthContainer,
    DayContainerStyled,
    DayStyled,
    SmartReactCalendarGlobalStyle
} from './UI/index'

const SmartReactCalendar = ({ selected, startDate, endDate, disabledDays, format, locale, timezone, theme, onChange }) => {
    moment.tz.setDefault(timezone)
    moment.locale(locale, locales[locale])

    const START_DATE = moment.isMoment(startDate) ? startDate : moment(startDate)
    const END_DATE = moment.isMoment(endDate) ? endDate : moment(endDate)
    const DISABLED_DAYS = disabledDays

    const [dateSelected, setDateSelected] = useState(moment.isMoment(selected) ? selected.format('YYYY-MM-DD') : moment(selected).format('YYYY-MM-DD'))
    const [isToday, isSelected, isDayDisabled, goToday] = useHelpers(DISABLED_DAYS)

    //Events
    //useEffect(() => {
    //    setDateSelected(moment.isMoment(selected) ? selected.format('YYYY-MM-DD') : moment(selected).format('YYYY-MM-DD'))
    //}, [selected])

    //Refs
    const btnTodayRef = useRef()
    const containerCalendarRef = useRef()

    const DATES = useGenerateDateStructureObject(START_DATE, END_DATE)


    const selectedMomentDate = !isDayDisabled(dateSelected) ? moment(dateSelected, 'YYYY-MM-DD') : null

    const weekdaysMin = useMemo(() => [
        moment.weekdaysShort(1),
        moment.weekdaysShort(2),
        moment.weekdaysShort(3),
        moment.weekdaysShort(4),
        moment.weekdaysShort(5),
        moment.weekdaysShort(6),
        moment.weekdaysShort(0),
    ], [])

    return (
        <Fragment>
            {!theme.disabledFont && <SmartReactCalendarGlobalStyle />}

            <ThemeProvider theme={theme}>
                <CalendarStyled id="SmartReactCalendar">
                    <HeaderStyled>
                        <div>
                            <HeaderYearStyled>{selectedMomentDate ? selectedMomentDate.format('YYYY') : <span style={{ opacity: 0 }}>0000</span>}</HeaderYearStyled>
                            <HeaderDateSelectedStyled>{selectedMomentDate ? selectedMomentDate.format('ddd, MMM Do') : moment.localeData(locale)._noDateSelected}</HeaderDateSelectedStyled>
                        </div>
                        <HeaderBtnTodayStyled ref={btnTodayRef} onClick={() => goToday(btnTodayRef, containerCalendarRef)}>{moment.localeData(locale)._today}</HeaderBtnTodayStyled>
                    </HeaderStyled>

                    <WeekDaysStyled>
                        {weekdaysMin.map(weekDay => <WeekDaysTextStyled key={`week-day-${weekDay}`}>{weekDay}</WeekDaysTextStyled>)}
                    </WeekDaysStyled>

                    <CalendarDaysContainerStyled ref={containerCalendarRef}>
                        {Object.keys(DATES).map(year => {
                            return DATES[year].map((days, indexMonth) => {
                                let arr = []

                                let spaces = moment(`${year}-${indexMonth + 1}`, 'YYYY-MM').day() - 1
                                for (let x = 0; x < spaces; x++) {
                                    arr.push(<div key={`space-index-${x}-${year}-${indexMonth + 1}`}></div>)
                                }

                                return (
                                    <Fragment key={`month-${indexMonth + 1}`}>
                                        <MonthTitleStyled marginTop={indexMonth !== START_DATE.month() && 15}>
                                            {moment(`${indexMonth + 1}`, 'MM').format('MMMM')}
                                        </MonthTitleStyled>
                                        <MonthContainer>
                                            {
                                                days.map((day, indexDay) => {
                                                    let currentDate = `${year}-${(indexMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
                                                    let _isDayDisabled = isDayDisabled(currentDate)

                                                    return (
                                                        <Fragment key={`day-${currentDate}`}>
                                                            {indexDay === 0 && arr.map(div => div)}
                                                            <DayContainerStyled
                                                                onClick={() => {
                                                                    if (_isDayDisabled || currentDate === dateSelected) return
                                                                    setDateSelected(currentDate)
                                                                    onChange(!format ? currentDate : moment(currentDate, 'YYYY-MM-DD').format(format))
                                                                }}
                                                            >
                                                                <DayStyled state={[
                                                                    isToday(currentDate) && 'today',
                                                                    !_isDayDisabled && isSelected(currentDate, dateSelected) && 'selected',
                                                                    _isDayDisabled && 'disabled'
                                                                ]}>
                                                                    {day}
                                                                </DayStyled>
                                                            </DayContainerStyled>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </MonthContainer>
                                    </Fragment>
                                )
                            })
                        })}
                    </CalendarDaysContainerStyled>
                </CalendarStyled>
            </ThemeProvider>
        </Fragment>
    )
}

SmartReactCalendar.defaultProps = {
    selected: moment(),
    startDate: moment(),
    endDate: moment().add(2, 'months'),
    disabledDays: [],
    format: false,
    locale: 'en',
    timezone: 'Europe/Madrid',
    onChange: () => { },
    theme: {
        primaryColor: "#2e88f1",
        secondaryColor: "#111d4a",
        disabledDaysColor: "#c2c2c2",
        disabledFont: false,
    }
}

const isMomentOrDate = (props, propName, componentName) => {
    const prop = props[propName]

    if (moment.isMoment(prop) || prop instanceof Date) return

    return new Error(
        `Prop ${propName} is invalid. ${propName} need to be a instance of Date or a Moment`
    );
}
const disabledDaysIsCorrect = (props, propName, componentName) => {
    const { disabledDays } = props
    const patt = /^(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/

    for (let disabledDay of disabledDays) {
        let disabledDaysIsValid = patt.test(disabledDay)

        if (!disabledDaysIsValid) {
            return new Error(
                `Prop Array disabledDays is invalid, inside this array have this value ${disabledDay}. All dates in disabledDays need to have this patt YYYY-MM-DD`
            );
        }
    }
}
SmartReactCalendar.propTypes = {
    selected: isMomentOrDate,
    startDate: isMomentOrDate,
    endDate: isMomentOrDate,
    format: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])]),
    locale: PropTypes.oneOf(['es', 'en', 'pt']),
    timezone: PropTypes.string,
    disabledDays: disabledDaysIsCorrect,
    theme: PropTypes.object
}

export default SmartReactCalendar