import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { activateAcoustic, activateElectric } from '../../../store/slices/toneSlice';
import styles from './ToneButton.module.scss';

function ToneButton() {
  const dispatch = useAppDispatch();

  const switchToAcoustic = () => {
    dispatch(activateAcoustic());
  };

  const switchToElectric = () => {
    dispatch(activateElectric());
  };

  useEffect(() => {
    const onKeypress = (e: any) => {
      if (e.key === 'k') {
        switchToAcoustic();
      }

      if (e.key === 'l') {
        switchToElectric();
      }
    };

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);

  return (
    <>
      <span className={styles.tone}>Tone</span>
      <span className={styles.grand}>acoustic</span>
      <span className={styles.electro}>electric</span>
      <div className={styles.toneButtons}>
        <div>
          <button
            className={styles.button}
            onClick={switchToAcoustic}
            type="button"
            aria-label="switchToAcoustic"
          />
        </div>
        <div>
          <button
            className={styles.button}
            onClick={switchToElectric}
            type="button"
            aria-label="switchToElectric"
          />
        </div>
      </div>
    </>
  );
}

export default ToneButton;
