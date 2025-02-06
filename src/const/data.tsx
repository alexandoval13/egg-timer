import { Egg } from '@/types/Egg';
import RunnyEggIcon from '../../public/runny-egg-icon';
import GoldenEggIcon from '../../public/golden-egg-icon';
import MediumEggIcon from '../../public/medium-egg-icon';
import HardEggIcon from '../../public/hard-egg-icon';

export const eggData: Array<Egg> = [
  {
    name: 'Runny',
    time: 3 * 60000,
    icon: <RunnyEggIcon />,
  },
  {
    name: 'Golden',
    time: 4 * 60000,
    icon: <GoldenEggIcon />,
  },
  {
    name: 'Medium',
    time: 7 * 60000,
    icon: <MediumEggIcon />,
  },
  {
    name: 'Hard',
    time: 10 * 60000,
    icon: <HardEggIcon />,
  },
];
