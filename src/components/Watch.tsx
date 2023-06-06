import { Box, Grid } from "@mui/material"

interface IWatch {
    seconds: number,

}

export const Watch = ({ seconds }: IWatch) => {
    const formatTime = (totalSeconds: number) => {

        const minutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
    return (
        <Grid xs={12} >
            <Box component="span" ><h1>Timer</h1><p>{formatTime(seconds)}</p></Box>
        </Grid>)
}
