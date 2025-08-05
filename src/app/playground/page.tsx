import Layout from '../layout';
import styles from './page.module.css';

export default function Playground() {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.textContainer}>
          <p className={styles.heading}>Playground</p>
        </div>
        <div className={styles.divider} />
      </div>
    </Layout>
  );
}
