'use client';

import styles from './customTimeInput.module.css';
import { useState } from 'react';
import SelectorV2 from '../components/SelectorV2';
import Button from '../components/Button';

type CustomTimeInputProps = {
  handleSubmit: (ms: number) => void;
};

const CustomTimeInput = ({ handleSubmit }: CustomTimeInputProps) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const hrOptions = Array.from(Array(5).keys());
  const minOptions = Array.from(Array(60).keys());
  const secOptions = Array.from(Array(60).keys());

  const handleClick = () => {
    const ms = seconds * 1000 + minutes * 60000 + hours * 3600000;
    handleSubmit(ms);
  };

  return (
    <div className={styles.container}>
      <div
        // className={styles.grid}
        className={styles.inputRow}
      >
        <div className={styles.cell}>
          <p>Hours</p>
          <div className={styles.centered}>
            <SelectorV2
              options={hrOptions}
              indValue={hours}
              onChange={setHours}
            />
            <p>:</p>
          </div>
        </div>
        <div className={styles.cell}>
          <p>Minutes</p>
          <div className={styles.centered}>
            <SelectorV2
              options={minOptions}
              indValue={minutes}
              onChange={setMinutes}
            />
            <p>:</p>
          </div>
        </div>
        <div className={styles.cell}>
          <p>Seconds</p>
          <SelectorV2
            options={secOptions}
            indValue={seconds}
            onChange={setSeconds}
          />
        </div>
      </div>
      <Button
        label={!hours && !minutes && !seconds ? 'Custom Timer' : 'Start Timer'}
        onClick={handleClick}
        disabled={!hours && !minutes && !seconds}
      />
    </div>
  );
};

export default CustomTimeInput;
