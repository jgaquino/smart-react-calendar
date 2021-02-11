import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Calendar from './smart-react-calendar/dist'
import moment from 'moment-timezone'

function App() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      
      <Calendar
        selected={moment()}
        startDate={moment()}
        endDate={moment().add(1, 'months')}
        disabledDays={['2021-02-01']}
        onChange={newDate => console.log("HEEEEY ", newDate)}
        format="dd MMMM D"
      />

      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)