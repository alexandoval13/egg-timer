'use client';

import Timer from '../components/Timer';
import EggCard from './EggCard';
import { EggType } from '@/types/Egg';

import styles from './eggtimer.module.css';

type EggTimerProps = {
  handleClear: () => void;
  egg: EggType;
};

export default function EggTimer(props: EggTimerProps) {
  const { handleClear, egg } = props;

  const alert = new Audio('/audio-timer-alert.mp3');

  const handleComplete = () => {
    alert.play();
  };

  const handleReturn = () => {
    handleClear();
  };

  return (
    <div className={styles.container}>
      <EggCard egg={egg} />
      <Timer
        milliseconds={egg.time}
        onComplete={handleComplete}
        pauseEnabled
        handleEnd={handleReturn}
      />
    </div>
  );
}
