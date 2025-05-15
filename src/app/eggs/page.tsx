import EggContainer from './EggContainer';
import { EggType } from '@/types/Egg';

import styles from './page.module.css';

type EggsProps = {
  data: EggType[];
};

export default function Eggs(props: EggsProps) {
  const { data } = props;
  const title = `Get Crackin'`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.main}>
        <EggContainer data={data} />
      </div>
    </div>
  );
}
