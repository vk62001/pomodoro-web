import { useEffect, useState } from 'react'
import { Button } from "@mui/material"

interface IOptions {
    timerSetter: any
    option: string
    seconds: number
    disable: boolean
}

export const Options = ({ timerSetter, option, seconds, disable }: IOptions) => {

    const toggle = () => {
        timerSetter(seconds);
    }

    return (
        <>
            <Button disabled={disable} variant="contained" onClick={() => toggle()}>{option}</Button>
        </>)
}
