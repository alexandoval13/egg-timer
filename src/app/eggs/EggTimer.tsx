'use client';

import Timer from '../components/Timer';
import EggCard from './EggCard';
import { EggType } from '@/types/Egg';
import ChickenFaceLeftIcon from '../../../public/chicken-face-left-icon';
import LeftArrowIcon from '../../../public/left-arrow-icon';

import styles from './eggscontainer.module.css';

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
      <div className={styles['back-container']} onClick={handleReturn}>
        <LeftArrowIcon height="80px" width="80px" />
        <div className={styles.bounce}>
          <ChickenFaceLeftIcon />
        </div>
      </div>
      <div className={styles.card}>
        <EggCard egg={egg} />
        <Timer
          milliseconds={egg.time}
          onComplete={handleComplete}
          pauseEnabled
        />
      </div>
    </div>
  );
}
