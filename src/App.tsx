import { useState } from 'react'
import './App.css'
import { Pomodoro } from './components/Pomodoro'

function App() {
  // const [count, setCount] = useState(0)
  const [bg, setBg] = useState(1500);

  function bgColourSetter(bg: number) {
    console.log(bg)
    setBg(bg);
  }
  return (
    <div className={`app bg-${bg}`}>
      <Pomodoro bgColour={bgColourSetter} />
    </div>
  )
}

export default App
