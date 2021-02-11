import { useMemo } from 'react';
import moment from "moment-timezone"

const useGenerateDateStructureObject = (START_DATE, END_DATE) => {
    const DATES_MEMO = useMemo(() => {
        const DATES = {}

        const START_DATE_YEAR = START_DATE.year()
        const START_DATE_MONTH = START_DATE.month()
        const END_DATE_YEAR = END_DATE.year()
        const END_DATE_MONTH = END_DATE.month()

        for (let year = START_DATE_YEAR; year <= END_DATE_YEAR; year++) {
            DATES[year] = []

            let months = []
            if (START_DATE_YEAR === END_DATE_YEAR) {
                for (let i = START_DATE_MONTH; i <= END_DATE_MONTH; i++) months.push(i)
            } else if (year === START_DATE_YEAR) {
                for (let i = START_DATE_MONTH; i <= 11; i++) months.push(i)
            } else if (year === END_DATE_YEAR) {
                for (let i = 0; i <= END_DATE_MONTH; i++) months.push(i)
            } else {
                months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            }

            for (const month of months) {
                let daysOnMonth = moment(`${year}-${month + 1}`, 'YYYY-MM').daysInMonth()

                for (let day = 1; day <= daysOnMonth; day++) {
                    if (!DATES[year][month]) DATES[year][month] = []
                    DATES[year][month].push(day)
                }
            }
        }

        return DATES
    }, [START_DATE, END_DATE])

    return DATES_MEMO
}

export default useGenerateDateStructureObject