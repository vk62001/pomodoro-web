import { Grid } from "@mui/material"
import { Header } from "./Header"
import { Todo } from "./Todo"
import { Timer } from "./Timer/Timer"
import './styles.css'

export const Pomodoro = () => {
    return (
        <>
            <Header />
            <Timer />
            <Todo />
        </>
    )
}
