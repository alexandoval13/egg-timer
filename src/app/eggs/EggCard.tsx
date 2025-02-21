'use client';
import { EggType } from '@/types/Egg';
import styles from './eggcard.module.css';

type EggCardType = {
  data: EggType;
};

export default function EggCard({ data }: EggCardType) {
  const { name, icon } = data;

  return (
    <div className={styles.main}>
      {icon || null}
      <h1>{name}</h1>
    </div>
  );
}
