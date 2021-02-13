# Smart React Calendar

Simple calendar for your React App and NextJS 

![alt text](https://projects.jgfrontend.com/smart-react-calendar-assets/screenshot-calendar.png)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install smart-react-calendar.

```
npm install smart-react-calendar
```

## Usage

```js
import SmartReactCalendar from 'smart-react-calendar'

const Calendar = () => {
  return(
    <SmartReactCalendar />
  )
}

export default Calendar
```

## Props
| Property | Type | Default | Description                                                                                                                                      |
|:---------------------|:--------|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| selected | `Moment` or `new Date()` | `moment()` | Selected date
| startDate | `Moment` or `new Date()` | `moment()` | Date the calendar starts
| endDate | `Moment` or `new Date()` | `moment().add(2, 'months')` | Date the calendar ends
| disabledDays | Array | `[]` | Disabled days
| format | Boolean | `false` | Date format returned in the `onChange` function
| locale | String | `es` | Calendar translation
| timezone | String | `Europe/Madrid` | Timezone
| theme | Object | `{ primaryColor: "#2e88f1", secondaryColor: "#111d4a", disabledDaysColor: "#c2c2c2", disabledFont: false }` | Calendar style
| onChange | Function | `() => {}` | Callback invoked when the user change date 

## License
[MIT](https://choosealicense.com/licenses/mit/)