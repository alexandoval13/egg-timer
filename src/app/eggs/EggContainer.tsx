'use client';

import { Egg } from '@/types/Egg';
import EggButton from './EggButton';
import { useState } from 'react';
import Timer from '../components/Timer';

type EggContainerProps = {
  data: Array<Egg>;
};
export default function EggContainer({ data }: EggContainerProps) {
  const [timer, setTimer] = useState<boolean>(false);
  const [egg, setEgg] = useState<Egg | null>(null);

  const handleStartEggTimer = (data: Egg) => {
    console.log({ data });
    setTimer(true); // todo - optimize?
    setEgg(data);
  };

  return (
    <>
      {timer && egg ? (
        <Timer milliseconds={egg.time} />
      ) : (
        data.map((egg: Egg, i) => {
          return (
            <EggButton
              data={egg}
              key={`egg-button::${i}`}
              handleStartEggTimer={(val) => handleStartEggTimer(val)}
            />
          );
        })
      )}
    </>
  );
}
