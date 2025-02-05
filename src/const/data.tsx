import { Egg } from '@/types/Egg';
import RunnyEggIcon from '../../public/runny-egg-icon';
import GoldenEggIcon from '../../public/golden-egg-icon';
import MediumEggIcon from '../../public/medium-egg-icon';
import HardEggIcon from '../../public/hard-egg-icon';

export const eggData: Array<Egg> = [
  {
    name: 'Runny',
    minutes: 3,
    icon: <RunnyEggIcon />,
  },
  {
    name: 'Golden',
    minutes: 4,
    icon: <GoldenEggIcon />,
  },
  {
    name: 'Medium',
    minutes: 7,
    icon: <MediumEggIcon />,
  },
  {
    name: 'Hard',
    minutes: 10,
    icon: <HardEggIcon />,
  },
];
