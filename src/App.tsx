import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Grid } from '@mui/material'
import { Pomodoro } from './components/Pomodoro'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Grid container >
      {/* container */}
      <Grid xs={4} >HEY</Grid>
      <Grid xs={4} ><Pomodoro /></Grid>
      <Grid xs={4} >hEY</Grid>

      {/* Header */}
      {/* Timer */}
      {/* Task */}
    </Grid>

  )
}

export default App
