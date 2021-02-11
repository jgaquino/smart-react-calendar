import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CalendarDev from './smart-react-calendar/src'
import CalendarProd from './smart-react-calendar/dist'

import moment from 'moment-timezone'

function App() {
  const Calendar = process.env.REACT_APP_ENV === 'dev' ? CalendarDev : CalendarProd

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '25px' }}>Calendar: <span style={{ color: "#2e88f1", textTransform: 'uppercase' }}>{process.env.REACT_APP_ENV}</span></h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>


        <Calendar
          selected={moment()}
          startDate={moment()}
          endDate={moment().add(1, 'months')}
          disabledDays={['2021-02-01']}
          onChange={newDate => console.log("HEEEEY ", newDate)}
          format="dd MMMM D"
          locale="es"
          timezone="Europe/Madrid"
        />


      </div>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)