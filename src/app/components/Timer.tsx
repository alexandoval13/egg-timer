import { formatTimeToString } from '@/lib/formatTimeToString';
import Button from './Button';
import styles from './timer.module.css';
import { useEffect, useState } from 'react';

type TimerProps = {
  milliseconds: number; // in milliseconds
  onComplete?: () => void;
  playAlert?: boolean;
  pauseEnabled?: boolean;
};

export default function Timer({
  milliseconds = 0,
  onComplete,
  pauseEnabled = true,
  playAlert = false,
}: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(milliseconds);
  const [pause, setPause] = useState<boolean>(false);

  const onButtonClick = () => {
    setPause((prev) => !prev);
  };

  useEffect(() => {
    const alert = new Audio('/audio-timer-alert.mp3');
    if (timeRemaining <= 0) {
      if (playAlert) {
        alert.play();
      }
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      if (!pause) {
        setTimeRemaining((prev) => Math.max(prev - 1000, 0));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, pause, playAlert, onComplete]);

  return (
    <div className={styles.main}>
      <div className={styles.timer}>{formatTimeToString(timeRemaining)}</div>
      {pauseEnabled && (
        <Button
          label={pause ? 'Resume' : 'Pause'}
          handleClick={onButtonClick}
          disabled={!timeRemaining}
        />
      )}
    </div>
  );
}
