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

  const formatTimeToString = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Add leading zero to seconds if needed
    const secondsString = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${secondsString}`;
  };

  return (
    <div className={styles.main}>
      <div className={styles.timer}>{formatTimeToString(timeRemaining)}</div>
      {pauseEnabled && (
        <Button
          label={pause ? 'Resume' : 'Pause'}
          handleClick={onButtonClick}
        />
      )}
    </div>
  );
}
