import { formatTimeToString } from '@/lib/formatTimeToString';
import Button from './Button';
import styles from './timer.module.css';
import { useEffect, useState } from 'react';

type TimerProps = {
  milliseconds: number; // in milliseconds
  pauseEnabled?: boolean;
  onComplete?: () => void;
  handleEnd?: () => void;
};

export default function Timer({
  milliseconds = 0,
  pauseEnabled = true,
  onComplete,
  handleEnd,
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
      <div className={styles.actions}>
        {(pauseEnabled && timeRemaining && (
          <Button
            label={pause ? 'Resume' : 'Pause'}
            onClick={onButtonClick}
            disabled={!timeRemaining}
          />
        )) ||
          null}
        {handleEnd ? (
          <Button
            label={timeRemaining ? 'End Timer' : 'Close'}
            onClick={handleEnd}
          />
        ) : null}
      </div>
    </div>
  );
}
