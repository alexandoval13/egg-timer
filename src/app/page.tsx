import styles from './page.module.css';
import Eggs from './eggs/page';

export default function Home() {
  return (
    <div className={styles.page}>
      <Eggs />
    </div>
  );
}
