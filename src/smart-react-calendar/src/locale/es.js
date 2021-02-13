import moment from 'moment'
import es from 'moment/locale/es'

moment.updateLocale('es', {
    parentLocale: 'es',
    today: 'Hoy',
    noDateSelected: 'Seleccione una fecha...'
});

export default { es }