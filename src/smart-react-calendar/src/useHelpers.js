import { useCallback } from 'react'
import moment from 'moment-timezone'

const useHelpers = DISABLED_DAYS => {
    const NOW = moment()
    const NOW_FORMATED = NOW.format('YYYY-MM-DD')

    const isToday = useCallback(dateString => NOW_FORMATED === dateString)
    const isSelected = useCallback((dateString1, dateString2) => dateString1 === dateString2)
    const isDayDisabled = useCallback(dateString => DISABLED_DAYS.includes(dateString))

    const goToday = (btnTodayRef, containerCalendarRef) => {
        let btnToday = btnTodayRef.current
        let containerCalendar = containerCalendarRef.current

        containerCalendar.scrollTop = btnToday.offsetTop
    }

    return [isToday, isSelected, isDayDisabled, goToday]
}

export default useHelpers