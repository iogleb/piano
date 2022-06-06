import styles from './Line.module.scss';

function Line() {
  return (
    <div className={styles.box}>
      <div className={styles.firstLine} />
      <div className={styles.secondLine} />
      <div className={styles.thirdLine} />
    </div>
  );
}

export default Line;
