'use client';
import styles from './eggbutton.module.css';
import { Egg } from '@/types/Egg';
import EggCard from './EggCard';

type EggButtonType = {
  data: Egg;
  handleStartEggTimer: (val: Egg) => void;
};

export default function EggButton({
  data,
  handleStartEggTimer,
}: EggButtonType) {
  const handleClick = () => {
    handleStartEggTimer(data);
  };

  return (
    <div className={styles.main}>
      <EggCard data={data} />
      <button className={styles.button} onClick={handleClick}>
        <h4>Start Timer</h4>
      </button>
    </div>
  );
}
