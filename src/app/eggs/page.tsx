import EggContainer from './EggContainer';
import styles from './page.module.css';
import { EggType } from '@/types/Egg';

type EggsProps = {
  data: EggType[];
};

export default function Eggs(props: EggsProps) {
  const { data } = props;
  const title = `Get Crackin'`;

  return (
    <>
      <h1>{title}</h1>
      <main className={styles.main}>
        <EggContainer data={data} />
      </main>
    </>
  );
}
