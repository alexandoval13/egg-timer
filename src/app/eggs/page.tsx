import EggButton from '../components/EggButton';
import styles from './page.module.css';
import { Egg } from '@/types/Egg';

type EggsProps = {
  data: Array<Egg>;
};

export default function Eggs(props: EggsProps) {
  const { data } = props;
  return (
    <main className={styles.main}>
      {data.map((egg: Egg, i) => {
        return <EggButton data={egg} key={`egg-button::${i}`} />;
      })}
    </main>
  );
}
