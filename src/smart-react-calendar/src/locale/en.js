import moment from 'moment'

moment.defineLocale('en', {
    parentLocale: 'en',
    today: 'Today',
    noDateSelected: 'Select a date...'
});

const en = moment.localeData('en')

export default { en }