'use client';
import styles from './eggbutton.module.css';
import { Egg } from '@/types/Egg';

type EggButtonType = {
  data: Egg;
};

export default function EggButton({ data }: EggButtonType) {
  const { name, minutes } = data;

  const handleClick = () => {
    console.log({ name, minutes });
  };

  return (
    <div className={styles.main}>
      <h1>{name}</h1>
      <h3>{minutes} minutes</h3>

      <button className={styles.button} onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
