import { useState, useEffect } from 'react';
import Click from '../assets/sounds/click.mp3'
import TimeOver from '../assets/sounds/time_over.wav'

const useTimer = (initialTime: number = 1500) => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  let timerId: ReturnType<typeof setInterval>;

  const stopTimer = () => {
    // setTime(initialTime);
    setIsRunning(false);
  };

  const reStartTimer = (value: boolean) => {
    setTime(initialTime);
    setIsRunning(value);
  };

  const playAlertSound = (sound: any): void => {
    const audio = new Audio(sound);
    audio.play();
  };

  const startTimer = () => {
    playAlertSound(Click);

    timerId = setInterval(() => {

      setTime((prevTime) =>  { 
        if(prevTime===1){
          setIsRunning(false);
          clearInterval(timerId);
          playAlertSound(TimeOver);
        }
        return prevTime - 1
      });
    }, 30);
  };

  useEffect(() => {
    console.log(time)
    if (isRunning) {
      startTimer();
    } else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [initialTime, isRunning]);

  return { time, isRunning, setIsRunning, stopTimer, setTime, reStartTimer };
};

export default useTimer;

