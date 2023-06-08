import { Header } from "./Header"
import { Todo } from "./Todo"
import { Timer } from "./Timer/Timer"
import './styles.css'

export const Pomodoro = () => {
    return (
        <>
            <Header />
            <div className="timer-container">
                <Timer />
            </div>
            <Todo />
        </>
    )
}
