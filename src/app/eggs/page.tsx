import EggContainer from './EggsContainer';

import styles from './page.module.css';

export default function Eggs() {
  const title = `Get Crackin'`;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.main}>
        <EggContainer />
      </div>
    </div>
  );
}
