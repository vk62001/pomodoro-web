import { useState, useEffect } from 'react';

const useTimer = (initialTime: number = 0) => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  
  let timerId: ReturnType<typeof setInterval>;

  const stopTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  const startTimer = () => {
    timerId = setInterval(() => {
      // const  prevtime = time+1;
      // setTime(prevtime)
      setTime((prevTime) => prevTime + 1);
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

  return { time, isRunning, setIsRunning, stopTimer };
};

export default useTimer;

