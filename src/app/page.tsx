import styles from './page.module.css';
import Eggs from './eggs/page';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Eggs />
      </main>
    </div>
  );
}
