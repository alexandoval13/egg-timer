'use client';
import { useState } from 'react';
import Timer from '../components/Timer';
import EggCard from './EggCard';
import Button from '../components/Button';
import { EggType } from '@/types/Egg';

import styles from './eggcontainer.module.css';

type EggContainerProps = {
  data: Array<EggType>;
};

export default function EggContainer({ data }: EggContainerProps) {
  const [timer, setTimer] = useState<boolean>(false);
  const [egg, setEgg] = useState<EggType | null>(null);

  const handleStartEggTimer = (selectedEgg: EggType) => {
    setTimer(true);
    setEgg(selectedEgg);
  };

  const handleComplete = () => {
    alert(`Egg's ready!`);
  };

  return (
    <>
      {timer && egg ? (
        <div className={styles.container}>
          <EggCard data={egg} />
          <Timer milliseconds={egg.time} onComplete={handleComplete} />
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
