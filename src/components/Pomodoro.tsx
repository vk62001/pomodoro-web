import { Grid } from "@mui/material"
import { Header } from "./Header"
import { Todo } from "./Todo"
import { Timer } from "./Timer"

export const Pomodoro = () => {
    return (
        <Grid container direction={"row"} justifyContent={"center"} >
            <Header />
            <Timer />
            <Todo />
        </Grid>

    )
}
