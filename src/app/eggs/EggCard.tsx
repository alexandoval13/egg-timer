'use client';
import { EggType } from '@/types/Egg';
import styles from './eggcard.module.css';
import { formatTimeToString } from '@/lib/formatTimeToString';
// import Button from '../components/Button';

type EggCardPropsType = {
  egg: EggType;
  button?: boolean;
  handleClick: (egg: EggType) => void;
};

export default function EggCard({
  egg,
  button,
  handleClick,
}: EggCardPropsType) {
  const { time, name, icon } = egg;

  return (
    <div
      className={button ? styles.mainBtn : styles.main}
      onClick={() => handleClick(egg)}
    >
      <div className={styles.icon}>{icon}</div>

      <p className={styles.lg}>{name}</p>
      {button && (
        <div className={styles['text-container']}>
          <p className={styles.sm}>{formatTimeToString(time)} MIN</p>
        </div>
      )}
    </div>
  );
}
