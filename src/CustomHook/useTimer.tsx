import { useState, useEffect } from 'react';

const useTimer = (initialTime: number = 1500) => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  let timerId: ReturnType<typeof setInterval>;

  const stopTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  const startTimer = () => {
    timerId = setInterval(() => {
      // const  prevtime = time+1;
      // setTime(prevtime)
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (isRunning) {
      startTimer();
    } else {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [initialTime, isRunning]);

  return { time, isRunning, setIsRunning, stopTimer, setTime };
};

export default useTimer;

