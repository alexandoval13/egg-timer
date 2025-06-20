'use client';

import styles from './customTime.module.css';
import { useState } from 'react';
import Selector from './Selector';

const CustomTimeInput = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const hrOptions = Array.from(Array(5).keys());
  const minOptions = Array.from(Array(60).keys());
  const secOptions = Array.from(Array(60).keys());

  return (
    <div>
      <p>Custom Time Input</p>
      <div>
        <p>To-dos:</p>
        <ul>
          <li>Scrolling to select time</li>
          <li>Web behavior v. mobile (scroll, touch, click)</li>
        </ul>
      </div>

      <div className={styles.spacer} />

      <div className={styles.grid}>
        <p>Hours</p>
        <div className={styles.cell}>
          <Selector options={hrOptions} indValue={hours} onChange={setHours} />
          <p>:</p>
        </div>
        <p>Minutes</p>
        <div className={styles.cell}>
          <Selector
            options={minOptions}
            indValue={minutes}
            onChange={setMinutes}
          />
          <p>:</p>
        </div>
        <p>Seconds</p>
        <div className={styles.cell}>
          <Selector
            options={secOptions}
            indValue={seconds}
            onChange={setSeconds}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomTimeInput;
