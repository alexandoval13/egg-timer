'use client';
import styles from './eggbutton.module.css';
import { Egg } from '@/types/Egg';

type EggButtonType = {
  data: Egg;
};

export default function EggButton({ data }: EggButtonType) {
  const { name, minutes, icon } = data;

  const handleClick = () => {
    console.log({ name, minutes, icon });
  };

  return (
    <div className={styles.main}>
      {icon || null}
      <h1>{name}</h1>
      <button className={styles.button} onClick={handleClick}>
        <h4>Start</h4>
      </button>
    </div>
  );
}
