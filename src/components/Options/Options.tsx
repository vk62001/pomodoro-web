import '../Timer/Timer.css'

interface IOptions {
    timerSetter: any
    option: string
    seconds: number
    styling: string
}

export const Options = ({ timerSetter, option, seconds, styling }: IOptions) => {

    const toggle = () => {
        timerSetter(seconds);
    }

    return (
        <>
            <button className={styling} onClick={() => toggle()}>{option}</button>
        </>)
}
