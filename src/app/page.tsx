import styles from './page.module.css';
import Eggs from './eggs/page';
import { eggData } from '@/const/data';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Eggs data={eggData} />
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
