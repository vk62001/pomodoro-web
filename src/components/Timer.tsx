import { Box, Button, Grid } from "@mui/material"
import { useState, useEffect } from 'react'


export const Timer = () => {
    const [seconds, setSeconds] = useState(1500);
    const [start, setStart] = useState(false);
    const [short, setShort] = useState(false);
    const [long, setLong] = useState(false);
    const [pomodoro, setPomodoro] = useState(false);

    useEffect(() => {
        let timer: any = null;
        if (start) {
            timer = setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000);

            disableButtons()

        } else if (!start || seconds !== 0) {
            setSeconds(seconds)
            disableButtons()
            clearInterval(timer)
        }

        return () => clearInterval(timer);


    }, [start, seconds]); //que es este arreglo al final? se puede usar un objeto vacio tambien? o otro tipo de data collection?

    const formatTime = (totalSeconds: any) => {

        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    const toggle = () => {
        setStart(!start);
    }

    const setTimer = (seconds: any) => {
        setSeconds(seconds)
        formatTime(seconds)
    }

    const disableButtons = () => {
        if (start) {
            if (seconds === 1500) {
                setShort(true)
                setLong(true)
            } else if (seconds === 300) {
                setLong(true)
                setPomodoro(true)
            } else if (seconds === 900) {
                setShort(true)
                setPomodoro(true)
            }
        } else {
            setShort(false)
            setLong(false)
            setPomodoro(false)
        }
    }


    return (
        <Grid xs={12} justifyContent={"center"}>
            <Grid xs={12} justifyContent={"space-between"}>
                <Button variant={seconds !== 1500 ? "contained" : "outlined"} disabled={pomodoro} onClick={() => { setTimer(1500); toggle() }}>Pomodoro</Button>
                <Button variant={seconds !== 300 ? "contained" : "outlined"} disabled={short} onClick={() => { setTimer(300); toggle }}>Short Break</Button>
                <Button variant={seconds !== 900 ? "contained" : "outlined"} disabled={long} onClick={() => { setTimer(900); toggle }}>long Break</Button>
            </Grid>
            <Grid xs={12} >
                <Box component="span" ><h1>Timer</h1><p>{formatTime(seconds)}</p></Box>
            </Grid>
            <Grid>
                <Button variant="contained" onClick={toggle}>{!start ? 'Start' : 'Pause'}</Button>
            </Grid>


            {/* 3 options */}
            {/* {watch} */}
            {/* button  */}

        </Grid>
    )
}
