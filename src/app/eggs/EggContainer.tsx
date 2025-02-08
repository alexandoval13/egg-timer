'use client';
import { useState } from 'react';
import Timer from '../components/Timer';
import EggCard from './EggCard';
import Button from '../components/Button';
import { EggType } from '@/types/Egg';
import ChickenFaceLeftIcon from '../../../public/chicken-face-left-icon';
import LeftArrowIcon from '../../../public/left-arrow-icon';

import styles from './eggcontainer.module.css';

type EggContainerProps = {
  data: EggType[];
};

export default function EggContainer({ data }: EggContainerProps) {
  const [timer, setTimer] = useState<boolean>(false);
  const [egg, setEgg] = useState<EggType | null>(null);

  const alert = new Audio('/audio-timer-alert.mp3');

  const handleStartEggTimer = (selectedEgg: EggType) => {
    setTimer(true);
    setEgg(selectedEgg);
  };

  const handleComplete = () => {
    alert.play();
  };

  const clearTimer = () => {
    setEgg(null); // Reset after completion
    setTimer(false);
  };

  const handleReturn = () => {
    alert.pause();
    clearTimer();
  };

  return (
    <>
      {timer && egg ? (
        <div className={styles.container}>
          <div className={styles['back-container']} onClick={handleReturn}>
            <LeftArrowIcon height="80px" width="80px" />
            <div className={styles.bounce}>
              <ChickenFaceLeftIcon />
            </div>
          </div>
          <div className={styles.card}>
            <EggCard data={egg} />
            <Timer
              milliseconds={egg.time}
              onComplete={handleComplete}
              pauseEnabled
              playAlert
            />
          </div>
        </div>
      ) : (
        <div className={styles['cards-container']}>
          {data.map((egg: EggType, i) => {
            return (
              <div key={`egg::${i}`} className={styles.card}>
                <EggCard data={egg} />
                <Button
                  label="Start Timer"
                  handleClick={() => handleStartEggTimer(egg)}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
