import { Box, Button, Grid } from "@mui/material"
import { useState, useEffect } from 'react'
import { Watch } from "../Watch";
import './Timer.css'
import { Options } from "../Options/Options";


export const Timer = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [start, setStart] = useState(false);
    const [mode, setMode] = useState(0);


    useEffect(() => {
        //if no params, only launch once. If you pass params, when the variables change, it renders
        let timer: any = null;

        if (seconds === 0 && start) {
            clearInterval(timer)
            toggle()
            // setSeconds(1)
            // setSeconds(seconds) TODO: update to the right choice

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


    const toggle = () => {
        setStart(!start);
    }

    const timerSetter = (seconds: number) => {
        setSeconds(seconds)
        setMode(seconds)

        if (seconds === 1500 || seconds === 900 || seconds === 300) {
            // this is to make the start button to reset when clicked on a button a second time
            setStart(false)
        }
    }


    return (
        <Grid xs={12} justifyContent={"center"}>
            <Grid xs={12} justifyContent={"space-between"}>
                <Options disable={mode === 300 || mode === 900} timerSetter={timerSetter} option={"Pomodoro"} seconds={1500} />
                <Options disable={mode === 1500 || mode === 900} timerSetter={timerSetter} option={"Short Break"} seconds={300} />
                <Options disable={mode === 300 || mode === 1500} timerSetter={timerSetter} option={"Long Break"} seconds={900} />
            </Grid>
            <Watch seconds={seconds} />
            <Grid>
                <Button variant="contained" onClick={toggle}>{!start ? 'Start' : 'Pause'}</Button>
                <Button variant="contained" onClick={() => { setSeconds(0); setMode(0) }}>Reset</Button>
            </Grid>


            {/* 3 options */}
            {/* {watch} */}
            {/* button  */}

        </Grid>
    )
}