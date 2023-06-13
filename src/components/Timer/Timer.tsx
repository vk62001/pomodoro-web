import { useState, useEffect } from 'react';
import { Watch } from "../Watch/Watch";
import './Timer.css';
import useTimer from '../../CustomHook/useTimer';

interface ITimer {
    bgColour: any
}

export const Timer = ({ bgColour }: ITimer) => {

    const [initialTime, setInitialTime] = useState<number>(1500)
    const { time, isRunning, setIsRunning, stopTimer, setTime, reStartTimer } = useTimer(initialTime);
    const [startStyleClass, setStartStartClass] = useState<string>('button')
    const [resetStyleClass, setResetStyleClass] = useState<string>('button')
    const [buttonText, setButtonText] = useState('Start')

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
            console.log(windowSize)
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const handleStartTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
        buttonStyleSetter('Pause')

    };

    const handleResetTimer = () => {
        if (time !== initialTime) {
            isRunning ? reStartTimer(true) : reStartTimer(false)

            //change button style on click
            setTimeout(() => {
                setResetStyleClass('button');
            }, 200);
            setResetStyleClass('button-clicked');
        }

    };

    const handleStopTimer = () => {
        if (stopTimer) {
            stopTimer();
            buttonStyleSetter('Start')
        }
    }

    const optionSetter = (option: number) => {
        setInitialTime(option);
        setTime(option);
        setIsRunning(false);
        bgColour(option);
    }

    const buttonStyleSetter = (text: string) => {
        //change button style on click
        setTimeout(() => {
            setStartStartClass('button');
            setButtonText(text);
        }, 200);
        setStartStartClass('button-clicked');
    }

    return (
        <div className="timer">
            <div className="options">
                <div className='option'>
                    <button className={initialTime === 1500 ? "button-clicked" : "button"} onClick={() => optionSetter(1500)}>{windowSize.innerWidth > 920 ? "Pomodoro" : "Pomo"}</button>
                </div>
                <div className='option'>
                    <button className={initialTime === 300 ? "button-clicked" : "button"} onClick={() => optionSetter(300)}>{windowSize.innerWidth > 920 ? "Short Break" : "Short"}</button>
                </div>
                <div className='option'>
                    <button className={initialTime === 900 ? "button-clicked" : "button"} onClick={() => optionSetter(900)}>{windowSize.innerWidth > 920 ? "Long Break" : "Long"}</button>

                </div>
            </div>
            <Watch seconds={time} />
            <div className="buttons">
                <button className={startStyleClass} onClick={isRunning ? handleStopTimer : handleStartTimer}>{buttonText}</button>
                <button className={resetStyleClass} onClick={handleResetTimer}>Restart</button>
            </div>
        </div>

    )
}