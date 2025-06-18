import { EggType } from '@/types/Egg';
import RunnyEggIcon from '../../public/runny-egg-icon';
import GoldenEggIcon from '../../public/golden-egg-icon';
import MediumEggIcon from '../../public/medium-egg-icon';
import HardEggIcon from '../../public/hard-egg-icon';

export const eggData: EggType[] = [
  {
    name: 'Runny',
    time: 5 * 60000,
    icon: <RunnyEggIcon />,
  },
  {
    name: 'Golden',
    time: 7 * 60000,
    icon: <GoldenEggIcon />,
  },
  {
    name: 'Medium',
    time: 9 * 60000,
    icon: <MediumEggIcon />,
  },
  {
    name: 'Hard',
    time: 12 * 60000,
    icon: <HardEggIcon />,
  },
];
