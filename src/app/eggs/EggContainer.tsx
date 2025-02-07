'use client';
import { useState } from 'react';
import Timer from '../components/Timer';
import EggCard from './EggCard';
import Button from '../components/Button';
import { EggType } from '@/types/Egg';
import ChickenFaceLeftIcon from '../../../public/chicken-face-left-icon';

import styles from './eggcontainer.module.css';

type EggContainerProps = {
  data: EggType[];
};

export default function EggContainer({ data }: EggContainerProps) {
  const [timer, setTimer] = useState<boolean>(false);
  const [egg, setEgg] = useState<EggType | null>(null);

  const handleStartEggTimer = (selectedEgg: EggType) => {
    setTimer(true);
    setEgg(selectedEgg);
  };

  const handleComplete = () => {
    console.log(`Egg's ready!`);
  };

  const clearTimer = () => {
    setEgg(null); // Reset after completion
    setTimer(false);
  };

  const handleReturn = () => {
    clearTimer();
  };

  return (
    <>
      {timer && egg ? (
        <div>
          <Button
            label="Peck Another"
            icon={<ChickenFaceLeftIcon />}
            handleClick={handleReturn}
          />
          <div className={styles.container}>
            <EggCard data={egg} />
            <Timer
              milliseconds={egg.time}
              onComplete={handleComplete}
              pauseEnabled
            />
          </div>
        </div>
      ) : (
        data.map((egg: EggType, i) => {
          return (
            <div key={`egg::${i}`} className={styles.container}>
              <EggCard data={egg} />
              <Button
                label="Start Timer"
                handleClick={() => handleStartEggTimer(egg)}
              />
            </div>
          );
        })
      )}
    </>
  );
}
