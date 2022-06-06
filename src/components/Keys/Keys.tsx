import { NOTES } from '../../global/constans';
import Key from '../Key/Key';
import styles from './Keys.module.scss';

function Keys() {
  return (
    <div className={styles.box}>
      {NOTES.map((note) => <Key key={note} note={note} />)}
    </div>
  );
}

export default Keys;
