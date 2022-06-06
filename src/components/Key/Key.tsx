import { useEffect, useState } from 'react';
import Soundfont from 'soundfont-player';
import { useAppSelector } from '../../hooks/redux';
import styles from './Key.module.scss';
import { octaves } from '../../global/constans';

interface KeyItemProps {
    note: string;
  }

function Key({ note }: KeyItemProps) {
  const [isPressedWhite, setIsPressedWhite] = useState<boolean>(false);
  const [isPressedBlack, setIsPressedBlack] = useState<boolean>(false);

  const { isSwitchedOn } = useAppSelector((state) => state.powerSlice);
  const { volumeCounter } = useAppSelector((state) => state.volumeSlice);
  const { typeTone } = useAppSelector((state) => state.toneSlice);
  const { octaveNumber } = useAppSelector((state) => state.octaveSlice);

  const pressWhite = () => {
    if (isSwitchedOn) {
      Soundfont.instrument(
        new AudioContext(),
        typeTone === 'acoustic_grand_piano'
          ? 'acoustic_grand_piano'
          : 'electric_grand_piano',
        { gain: volumeCounter },
      ).then((piano) => {
        piano.play(note);
      });
      setIsPressedWhite(true);
      setTimeout(() => {
        setIsPressedWhite(false);
      }, 200);
    }
  };

  const pressBlack = () => {
    if (isSwitchedOn) {
      Soundfont.instrument(
        new AudioContext(),
        typeTone === 'acoustic_grand_piano'
          ? 'acoustic_grand_piano'
          : 'electric_grand_piano',
        {
          gain: volumeCounter,
        },
      ).then((piano) => {
        piano.play(note);
      });
      setIsPressedBlack(true);
      setTimeout(() => {
        setIsPressedBlack(false);
      }, 200);
    }
  };

  const noteIsBlack = (note: string) => note.length > 2;
  useEffect(() => {
    const selectedOctave: any = octaves[octaveNumber - 1];

    const onKeypress = (e: any) => {
      Object.keys(selectedOctave).forEach((octave) => {
        if (note === selectedOctave[octave] && e.key === octave) {
          if (noteIsBlack(note)) {
            pressBlack();
          } else {
            pressWhite();
          }
        }
      });
    };

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [isSwitchedOn, octaveNumber, typeTone, volumeCounter]);

  if (noteIsBlack(note)) {
    return (
      <div
        className={
              isPressedBlack && isSwitchedOn
                ? styles.pressedBlackKey
                : styles.blackKey
            }
        onClick={pressBlack}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={
      isPressedWhite && isSwitchedOn
        ? [styles.whiteKey, styles.pressedWhiteKey].join(' ')
        : styles.whiteKey
    }
      onClick={pressWhite}
      aria-hidden
    />
  );
}

export default Key;
