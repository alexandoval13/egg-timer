'use client';
import { EggType } from '@/types/Egg';
import styles from './eggcard.module.css';
import Button from '../components/Button';

type EggCardPropsType = {
  egg: EggType;
  button?: boolean;
  handleClick?: (egg: EggType) => void;
};

export default function EggCard({
  egg,
  button,
  handleClick,
}: EggCardPropsType) {
  const { name, icon } = egg;

  return (
    <div className={styles.main}>
      {icon && <div className={styles.icon}>{icon}</div>}

      {button && handleClick ? (
        <Button label={name} onClick={() => handleClick(egg)} />
      ) : (
        <h1>{name}</h1>
      )}
    </div>
  );
}
