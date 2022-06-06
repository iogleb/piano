import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { increaseVolume, turnVolumeDown } from '../../../store/slices/volumeSlice';
import styles from './VolumeButton.module.scss';
import volumeOneLevel from '../../../assets/volumeOneLevel.svg';
import volumeTwoLevel from '../../../assets/volumeTwoLevel.svg';
import volumeThreeLevel from '../../../assets/volumeThreeLevel.svg';
import volumeFourLevel from '../../../assets/volumeFourLevel.svg';
import volumeFiveLevel from '../../../assets/volumeFiveLevel.svg';

function VolumeButton() {
  const volume = [
    volumeOneLevel,
    volumeTwoLevel,
    volumeThreeLevel,
    volumeFourLevel,
    volumeFiveLevel,
  ];

  const dispatch = useAppDispatch();
  const { volumeCounter } = useAppSelector((state) => state.volumeSlice);

  const raiseVolume = () => {
    dispatch(increaseVolume());
  };

  const reduceVolume = () => {
    dispatch(turnVolumeDown());
  };

  useEffect(() => {
    const onKeypress = (e: any) => {
      if (e.key === 'i') {
        dispatch(increaseVolume());
      }

      if (e.key === 'o') {
        dispatch(turnVolumeDown());
      }
    };

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);
  return (
    <>
      <img
        src={
            volume[volumeCounter - 1]
        }
        className={styles.volumeLevel}
        alt="volumeImg"
      />
      <span className={styles.volumeText}>volume</span>
      <div className={styles.volumeButtons}>
        <div>
          <button className={styles.button} onClick={reduceVolume} type="button" aria-label="reduceVolume" />
        </div>
        <div>
          <button className={styles.button} onClick={raiseVolume} type="button" aria-label="raiseVolume" />
        </div>
      </div>
    </>
  );
}

export default VolumeButton;
