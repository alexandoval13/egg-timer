import { formatTimeToString } from '@/lib/formatTimeToString';
import Button from './Button';
import styles from './timer.module.css';
import { useEffect, useState } from 'react';

type TimerProps = {
  milliseconds: number; // in milliseconds
  onComplete?: () => void;
  pauseEnabled?: boolean;
};

export default function Timer({
  milliseconds = 0,
  onComplete,
  pauseEnabled = true,
}: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(milliseconds);
  const [pause, setPause] = useState<boolean>(false);

  const onButtonClick = () => {
    setPause((prev) => !prev);
  };

  useEffect(() => {
    if (timeRemaining <= 0) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      if (!pause) {
        setTimeRemaining((prev) => Math.max(prev - 1000, 0));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, pause, onComplete]);

  return (
    <div className={styles.main}>
      <div className={`${styles.timer} ${timeRemaining ? '' : styles.wiggle}`}>
        {formatTimeToString(timeRemaining)}
      </div>
      {(pauseEnabled && timeRemaining && (
        <Button
          label={pause ? 'Resume' : 'Pause'}
          handleClick={onButtonClick}
          disabled={!timeRemaining}
        />
      )) ||
        null}
    </div>
  );
}
