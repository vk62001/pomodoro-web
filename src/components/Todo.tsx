import useTimer from '../CustomHook/useTimer';

export const Todo = () => {
    const { time, isRunning, setIsRunning, stopTimer } = useTimer();

  const handleToggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleResetTimer = () => {
    if (stopTimer) {
      stopTimer();
    }
    setIsRunning(true);
  };
    return (
        <>
        <div>Todo</div>
        <h1>Timer: {time} segundos</h1>
         <button onClick={handleToggleTimer}>{isRunning ? 'Detener' : 'Iniciar'}</button>
            <button onClick={handleResetTimer}>Reiniciar</button>
        </>
    )
}
