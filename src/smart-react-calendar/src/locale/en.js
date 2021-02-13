import moment from 'moment'

moment.updateLocale('en', {
    parentLocale: 'en',
    today: 'Today',
    noDateSelected: 'Select a date...'
});

const en = moment.localeData('en')

export default { en }