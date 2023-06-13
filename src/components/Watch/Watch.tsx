import './Watch.css'

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
        <div>
            <p className="watch">{formatTime(seconds)}</p>
        </div>)
}
