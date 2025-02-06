'use client';
import styles from './eggbutton.module.css';
import { Egg } from '@/types/Egg';
import EggCard from './EggCard';
import Button from '../components/Button';

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
      <Button label={'Start Timer'} handleClick={handleClick} />
    </div>
  );
}
