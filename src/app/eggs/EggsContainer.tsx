'use client';
import { useState } from 'react';
import EggCard from './EggCard';
import { EggType } from '@/types/Egg';

import styles from './eggscontainer.module.css';
import EggTimer from './EggTimer';
import { eggData } from '@/const/data';

export default function EggsContainer() {
  const data = eggData;
  const [egg, setEgg] = useState<EggType | null>(null);

  const handleStartEggTimer = (selectedEgg: EggType) => {
    setEgg(selectedEgg);
  };

  const clearTimer = () => {
    setEgg(null); // Reset after completion
  };

  const handleClear = () => {
    clearTimer();
  };

  return (
    <>
      {egg ? (
        <EggTimer handleClear={handleClear} egg={egg} />
      ) : (
        <div className={styles['cards-container']}>
          {data.map((egg: EggType, i) => {
            return (
              <div key={`egg::${i}`}>
                <EggCard
                  egg={egg}
                  button
                  handleClick={(val) => handleStartEggTimer(val)}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
