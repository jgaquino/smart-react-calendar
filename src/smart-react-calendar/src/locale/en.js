import moment from 'moment'

moment.defineLocale('en', {
    parentLocale: 'en',
    today: 'Today'
});

const en = moment.localeData('en')

export default { en }