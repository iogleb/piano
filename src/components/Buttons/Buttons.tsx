import OctaveButton from '../Button/OctaveButton';
import PowerButton from '../Button/PowerButton';
import ToneButton from '../Button/ToneButton';
import VolumeButton from '../Button/VolumeButton';
import styles from './Buttons.module.scss';

function Buttons() {
  return (
    <div className={styles.box}>
      <PowerButton />
      <VolumeButton />
      <ToneButton />
      <OctaveButton />
    </div>
  );
}

export default Buttons;
