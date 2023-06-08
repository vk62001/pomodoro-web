import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Pomodoro } from './components/Pomodoro'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Pomodoro />
    </div>
  )
}

export default App
