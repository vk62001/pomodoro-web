import { useState } from 'react'
import './App.css'
import { Pomodoro } from './components/Pomodoro'

function App() {
  // const [count, setCount] = useState(0)
  const [bg, setBg] = useState("bg-pomo");

  function bgColourSetter(bg: string) {
    setBg(bg);
  }
  return (
    <div className={`app ${bg}`}>
      <Pomodoro bgColour={bgColourSetter} />
    </div>
  )
}

export default App
