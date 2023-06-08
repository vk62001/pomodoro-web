import { useState, useEffect } from 'react'
import { Watch } from "../Watch/Watch";
import './Timer.css'
import { Options } from "../Options/Options";

interface IWatch {
    bgColour: any
}

export const Timer = ({ bgColour }: IWatch) => {
    const [seconds, setSeconds] = useState<number>(0);
    const [start, setStart] = useState(false);
    const [mode, setMode] = useState(0);
    const [resetClicked, setResetClicked] = useState(false);
    const [startClicked, setStartClicked] = useState(false);


    useEffect(() => {
        //if no params, only launch once. If you pass params, when the variables change, it renders
        let timer: any = null;

        if (seconds === 0 && start) {
            clearInterval(timer)
            setStart(!start);
            return;
        }

        if (start) {
            timer = setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000);


        } else if (!start || seconds !== 0) {
            setSeconds(seconds)
            clearInterval(timer)
        }

        return () => clearInterval(timer);


    }, [start, seconds]); //que es este arreglo al final? se puede usar un objeto vacio tambien? o otro tipo de data collection?

    const timerSetter = (seconds: number) => {
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

    const reset = () => {
        setSeconds(0);
        setResetClicked(true);
        setMode(0);
        setStartClicked(false);
        setTimeout(() => {
            setResetClicked(false);
        }, 200);
    }

    const startSetter = () => {
        setStart(!start);
        setStartClicked(true);
        setTimeout(() => {
            setStartClicked(false);
        }, 200);
    }

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
                <button className={startClicked ? "button-clicked" : "button start"} onClick={startSetter}>{!start ? 'Start' : 'Pause'}</button>
                <button
                    className={resetClicked ? "button-clicked" : "button reset"}
                    onClick={reset}>
                    Reset
                </button>
            </div>
        </div>

    )
}