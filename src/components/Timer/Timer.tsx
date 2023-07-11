import { useState } from 'react';
import { Watch } from "../Watch/Watch";
import './Timer.css';
import useTimer from '../../CustomHook/useTimer';

interface ITimer {
    bgColour: (value: number) => void
}

export const Timer = ({ bgColour }: ITimer) => {

    const [initialTime, setInitialTime] = useState<number>(1500)
    const { time, isRunning, setIsRunning, stopTimer, setTime, reStartTimer } = useTimer(initialTime);
    const [startStyleClass, setStartStyleClass] = useState<string>('button')
    const [resetStyleClass, setResetStyleClass] = useState<string>('button')
    const [buttonText, setButtonText] = useState('Start')

    const handleStartTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);

        //change button style on click
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

            //change button style on click
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
        setTimeout(() => {
            setStartStyleClass('button');
            setButtonText(text);
        }, 200);
        setStartStyleClass('button-clicked');
    }

    return (
        <div className="timer">
            <div className="options">
                <div className='option pomo'>
                    <button className={initialTime === 1500 ? "button-clicked" : "button"} onClick={() => optionSetter(1500)}>Pomo<span className='long-text'>doro</span></button>
                </div>
                <div className='option short'>
                    <button className={initialTime === 300 ? "button-clicked" : "button"} onClick={() => optionSetter(300)}>Short <span className='spaced long-text'>Break</span></button>
                </div>
                <div className='option long'>
                    <button className={initialTime === 900 ? "button-clicked" : "button"} onClick={() => optionSetter(900)}>Long <span className='spaced long-text'>Break</span></button>
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