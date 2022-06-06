import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { increaseOctave, reduceOctave } from '../../../store/slices/octaveSlice';
import styles from './OctaveButton.module.scss';
import switchLeft from '../../../assets/switchLeft.svg';
import switchRight from '../../../assets/switchRight.svg';

function OctaveButton() {
  const dispatch = useAppDispatch();

  const clickSwitchLeft = () => {
    dispatch(reduceOctave());
  };

  const clickSwitchRight = () => {
    dispatch(increaseOctave());
  };

  useEffect(() => {
    const onKeypress = (e: any) => {
      if (e.key === 'x') {
        clickSwitchLeft();
      }

      if (e.key === 'z') {
        clickSwitchRight();
      }
    };

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);

  return (
    <>
      <img src={switchLeft} className={styles.switchLeft} alt="switchLeft" />
      <img src={switchRight} className={styles.switchRight} alt="switchRight" />
      <div className={styles.octaveButtons}>
        <div>
          <button aria-label="switchLeft" type="button" className={styles.button} onClick={clickSwitchLeft} />
        </div>
        <div>
          <button aria-label="switchRight" type="button" className={styles.button} onClick={clickSwitchRight} />
        </div>
      </div>
    </>
  );
}

export default OctaveButton;
