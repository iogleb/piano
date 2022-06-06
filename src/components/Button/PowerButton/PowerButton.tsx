import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { switchToggle } from '../../../store/slices/powerSlice';
import styles from './PowerButton.module.scss';
import power from '../../../assets/power.svg';

function PowerButton() {
  const { isSwitchedOn } = useAppSelector((state) => state.powerSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onKeypress = (e: any) => {
      if (e.key === 'p') {
        dispatch(switchToggle());
      }
    };

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);
  return (
    <>
      <img className={styles.power} src={power} alt="power" />
      <div>
        <button
          className={isSwitchedOn ? styles.activeButton : styles.button}
          onClick={() => dispatch(switchToggle())}
          type="button"
          aria-label="switchToggle"
        />
      </div>
    </>
  );
}

export default PowerButton;
