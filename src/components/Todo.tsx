import { useEffect, useState } from 'react';
import useTimer from '../CustomHook/useTimer';
import { Input } from './Input/Input';
import { getArray, setCacheArray, deleteItem } from '../cache/cache';


export const Todo = () => {
    const [initialTime, setInitialTime] = useState<number>(1500)
    const { time, isRunning, setIsRunning, stopTimer, setTime } = useTimer(initialTime);

    const handleChangeTimer = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };

    const handleResetTimer = () => {
        if (stopTimer) {
            console.log("stopTimer")
            stopTimer();
        }
        // setIsRunning(true); //this makes the timer run all the time
    };

    const [task, setTask] = useState<string>('');
    const [todos, setTodos] = useState<any>([]);

    const addNewTask = () => {
        //get Array Task
        //push ArrayTask
        //add to arrayTask
        const newTask: any = {
            id: new Date(),
            task: task
        };
        const arrayTaskTemp = localStorage.getItem('arrayTask') || '';
        if (arrayTaskTemp.length === 0) {
            setCacheArray('arrayTask', [newTask]);
            setTodos([newTask]);
        } else {
            const temp = JSON.parse(arrayTaskTemp);
            temp.push(newTask);
            setTodos(temp);
            setCacheArray('arrayTask', temp);
        }
        setTask('');
    };

    const deleteTask = (id: string) => {
        // const arrayTaskTemp = localStorage.getItem('arrayTask') || '';
        // const temp = JSON.parse(arrayTaskTemp);
        // const val = temp.filter((x: any) => x.id !== id)
        // setTodos(val)
        // setCacheArray('arrayTask', val);
        // deleteItem('arrayTask', id)
        let newArray = deleteItem('arrayTask', id)

        if (newArray)
            setTodos(newArray)
    }


    useEffect(() => {
        const arrayTaskTemp = localStorage.getItem('arrayTask') || '';
        if (arrayTaskTemp.length > 0) {
            setTodos(JSON.parse(arrayTaskTemp));
        }

    }, [])



    const renderTodos = () => {
        if (Object.keys(todos).length === 0) return;
        return todos.map((e: any) => (
            <li key={e.id}>
                {e.task}<button onClick={() => deleteTask(e.id)}>Delete</button>
            </li>
        ));
    }

    return (
        <>
            <div>Todo</div>
            <h1>Timer: {time} segundos</h1>
            <button onClick={isRunning ? handleResetTimer : handleChangeTimer}>{isRunning ? 'Detener' : 'Iniciar'}</button>
            <button onClick={handleResetTimer}>Reiniciar</button>
            <button onClick={() => { setInitialTime(1500); setTime(1500) }}>Pomodoro</button>
            <button onClick={() => { setInitialTime(900); setTime(900) }}>Long Time</button>
            <button onClick={() => { setInitialTime(300); setTime(300) }}>Short Time</button>

            <Input
                placeholder='Add name new task'
                type="text"
                onChange={setTask}
                value={task}
            />
            <button onClick={addNewTask}>Add new Task</button>
            <ul>
                {renderTodos()}
            </ul>
        </>
    )
};

//homeWork
//to do a Loader custom hook
