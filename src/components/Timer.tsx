import { Box, Button, Grid } from "@mui/material"

export const Timer = () => {
    return (
        <Grid xs={12} justifyContent={"center"}>
            <Grid xs={12} justifyContent={"space-between"}>
                <Button variant="contained" >Default</Button>
                <Button variant="contained" >Break</Button>
                <Button variant="contained" >Long Break</Button>
            </Grid>
            <Grid xs={12} >
                <Box component="span" ><h1>Timer</h1></Box>
            </Grid>
            <Grid>
                <Button variant="contained">Start</Button>
            </Grid>


            {/* 3 options */}
            {/* {watch} */}
            {/* button  */}

        </Grid>
    )
}
