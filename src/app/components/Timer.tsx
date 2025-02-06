import { useEffect, useState } from 'react';

type TimerProps = {
  milliseconds: number; // in milliseconds
  onComplete?: () => void;
};

export default function Timer({ milliseconds = 0, onComplete }: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(milliseconds);

  useEffect(() => {
    if (timeRemaining <= 0) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining, onComplete]);

  const formatTimeToString = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Add leading zero to seconds if needed
    const secondsString = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${secondsString}`;
  };

  return (
    <div className="countdown-timer-container">
      {formatTimeToString(timeRemaining)}
    </div>
  );
}
