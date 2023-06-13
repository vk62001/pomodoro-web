import { Header } from "./Header"
import { Todo } from "./Todo/Todo"
import { Timer } from "./Timer/Timer"
import './styles.css'

interface IPomodoro {
    bgColour: any
}

export const Pomodoro = ({ bgColour }: IPomodoro) => {
    return (
        <div className="pomodoro">
            <Header />
            <div className="timer-container">
                <Timer bgColour={bgColour} />
            </div>
            <Todo />
        </div>
    )
}
