import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';
import romanceTour from './assets/tour-title.png';

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState();
  const camillasDate = moment('08/01/2020', 'MM/DD/YYYY');
  const today = moment();

  const secondsToCamilla = camillasDate.diff(today, 'seconds');
  const minutesToCamilla = camillasDate.diff(today, 'minutes');
  const hoursToCamilla = camillasDate.diff(today, 'hours');
  const daysToCamilla = camillasDate.diff(today, 'days');
  const weeksToCamilla = camillasDate.diff(today, 'weeks');
  const monthsToCamilla = camillasDate.diff(today, 'months');

  const tick = () => {
    if (time > 0) {
      setTime(time - 1);
    } else {
      // clearInterval(this.timer);
      // window.location.reload();
    }
  };

  useEffect(() => {
    setTimer(setInterval(tick, 1000));
  });

  return (
    <div className="App">
      <header>
        <img alt="romace tour" src={romanceTour} />
      </header>
      <div className="countdown">
        <p>{secondsToCamilla} seconds</p>
        <p>{minutesToCamilla} minutes</p>
        <p>{hoursToCamilla} hours</p>
        <p>{daysToCamilla} days</p>
        <p>{weeksToCamilla} weeks</p>
        <p>{monthsToCamilla} months</p>
      </div>
    </div>
  );
}

export default App;
