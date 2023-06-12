import { useState, useEffect } from 'react'
import { Watch } from "../Watch/Watch";
import './Timer.css'
import { Options } 


from "../Options/Options";
import Click from '../../assets/sounds/click.mp3'
import TimeOver from '../../assets/sounds/time_over.wav'

interface IWatch {
    bgColour: any
}

export const Timer = ({ bgColour }: IWatch) => {
    const [seconds, setSeconds] = useState<number>(1500);
    const [start, setStart] = useState<boolean>(false);
    /**mode: controls behaviour on options picked. (cannot use seconds as it change, but mode keeps the value until another choice is picked)*/
    const [mode, setMode] = useState<number>(1500);

    /** These both controls style changes on button click rather than functionality*/
    const [resetClicked, setResetClicked] = useState<boolean>(false);
    const [startClicked, setStartClicked] = useState<boolean>(false);


    useEffect(() => {
        //if no params, only launch once. If you pass params, when the variables change, it renders
        let timer: any = null;

        //clear timer when we click in an option and set start to false
        if (seconds === 0 && start) {
            clearInterval(timer)
            setStart(!start);
            playAlertSound(TimeOver);
            return;
        }

        if (start) {

            timer = setInterval(() => {
                setSeconds(seconds - 1)
            }, 10);


        } else if (!start || seconds !== 0) {
            setSeconds(seconds)
            clearInterval(timer)
        }

        return () => clearInterval(timer);

    }, [start, seconds]); //que es este arreglo al final? se puede usar un objeto vacio tambien? o otro tipo de data collection?

    const timerSetter = (seconds: number): void => {
        setSeconds(seconds)
        setMode(seconds)

        if (seconds === 300) {
            bgColour("bg-short")
        } else if (seconds === 1500) {
            bgColour("bg-pomo")

        } else if (seconds === 900) {
            bgColour("bg-long")
        }

        if (seconds === 1500 || seconds === 900 || seconds === 300) {
            // this is to make the start button to reset when clicked on a button a second time
            setStart(false)
        }
    }

    const reset = (): void => {
        setSeconds(mode);
        setResetClicked(true);
        setStart(false);
        setStartClicked(false);
        setTimeout(() => {
            setResetClicked(false);
        }, 200);
    }

    const startSetter = (): void => {
        playAlertSound(Click);
        setStart(!start);
        setStartClicked(true);
        setTimeout(() => {
            setStartClicked(false);
        }, 200);
    }

    const playAlertSound = (sound: any): void => {
        const audio = new Audio(sound);
        audio.play();
    };

    return (
        <div className="timer">
            <div className="options">
                <div >
                    <Options styling={mode === 1500 ? "button-clicked" : "button"} timerSetter={timerSetter} option={"Pomodoro"} seconds={1500} />
                </div>
                <div>
                    <Options styling={mode === 300 ? "button-clicked" : "button"} timerSetter={timerSetter} option={"Short Break"} seconds={300} />
                </div>
                <div>
                    <Options styling={mode === 900 ? "button-clicked" : "button"} timerSetter={timerSetter} option={"Long Break"} seconds={900} />
                </div>
            </div>
            <Watch seconds={seconds} />
            <div className="buttons">
                <button disabled={seconds === 0} className={`${startClicked ? 'button-clicked' : 'button reset'} ${seconds === 0 ? 'disabled' : ''}`} onClick={startSetter}>{!start ? 'Start' : 'Pause'}</button>
                <button
                    className={resetClicked ? "button-clicked" : "button reset"}
                    onClick={reset}>
                    Restart
                </button>
            </div>
        </div>

    )
}