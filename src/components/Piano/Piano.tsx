import Buttons from '../Buttons';
import Keys from '../Keys';
import Line from '../UI/Line';
import Logo from '../UI/Logo';
import styles from './Piano.module.scss';

function Piano() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Line />
        <Logo />
        <Buttons />
        <Keys />
      </div>
    </div>
  );
}

export default Piano;
