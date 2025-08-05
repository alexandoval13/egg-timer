'use client';
import styles from './eggscontainer.module.css';

import { useState } from 'react';

import CustomTimeInput from './CustomTimeInput';
import EggCard from './EggCard';
import EggTimer from './EggTimer';
import HardEggIcon from '../../../public/hard-egg-icon';

import { EggType } from '@/types/Egg';
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

  const handleSubmitCustomTime = (ms: number) => {
    setEgg({ name: 'Custom', time: ms, icon: <HardEggIcon /> });
  };

  return (
    <div className={styles.container}>
      {egg ? (
        <EggTimer handleClear={handleClear} egg={egg} />
      ) : (
        <div className={styles.main}>
          <CustomTimeInput handleSubmit={handleSubmitCustomTime} />
          <div className={styles.eggGrid}>
            {data.map((egg: EggType, i) => (
              <div key={`egg::${i}`}>
                <EggCard
                  egg={egg}
                  button
                  handleClick={(val) => handleStartEggTimer(val)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
