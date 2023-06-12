import { useEffect, useState } from 'react';
import useTimer from '../CustomHook/useTimer';
import { Input } from './Input/Input';
import { getArray, setCacheArray, deleteItem } from '../cache/cache';


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
