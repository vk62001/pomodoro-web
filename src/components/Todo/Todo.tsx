import { useEffect, useState } from 'react';
import { Input } from '../Input/Input';
import { getArray, setCacheArray, deleteCache } from '../../cache/cache';
import './Todo.css'
import '../styles.css'

export const Todo = () => {

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
        let newArray = todos.filter((x: any) => x.id !== id)
        setCacheArray('arrayTask', newArray);

        if (newArray !== null || newArray !== undefined)
            setTodos(newArray)
    }

    const deleteAllTasks = () => {
        deleteCache('arrayTask');
        setTodos([])
    }


    useEffect(() => {
        const arrayTaskTemp = localStorage.getItem('arrayTask') || '';
        if (arrayTaskTemp.length > 0) {
            setTodos(JSON.parse(arrayTaskTemp));
        }
        localStorage.removeItem('arrayTask');
    }, [])



    const renderTodos = () => {
        if (Object.keys(todos).length === 0) return;
        return todos.map((e: any) => (
            <li className='list-item' key={e.id}>
                <p className='text-list'>{e.task}</p>
                <button
                    className='todo-buttons'
                    onClick={() => deleteTask(e.id)}>Delete
                </button>
            </li>
        ));
    }

    return (
        <>
            <h1>Tasks</h1>
            <div className='add-task'>
                <Input
                    placeholder='Add a new task'
                    type="text"
                    onChange={setTask}
                    value={task}
                />
                <button
                    className='todo-buttons'
                    onClick={addNewTask}
                    disabled={task.length <= 0}>Add <span className='long-text'>New Task</span>
                </button>
                <button
                    className='todo-buttons'
                    onClick={deleteAllTasks}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512">
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                </button>
            </div>

            <ul>
                {renderTodos()}
            </ul>
        </>
    )
};

//homeWork
//to do a Loader custom hook
