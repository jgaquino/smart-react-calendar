import moment from 'moment'
import pt from 'moment/locale/pt'

moment.updateLocale('pt', {
    parentLocale: 'pt',
    today: 'Hoje',
    noDateSelected: 'Selecione uma data'
});

export default { pt }