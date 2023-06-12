import { useEffect, useState } from 'react';
import { Input } from '../Input/Input';
import { getArray, setCacheArray, deleteItem } from '../../cache/cache';
import './Todo.css'

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
            <li className='list-item' key={e.id}>
                <p className='text-list'>{e.task}</p><button className='todo-buttons' onClick={() => deleteTask(e.id)}>Delete</button>
            </li>
        ));
    }

    return (
        <>
            <h1>Tasks</h1>
            <div className='add-task'><Input
                placeholder='Add a new task'
                type="text"
                onChange={setTask}
                value={task}
            />
                <button className='todo-buttons' onClick={addNewTask}>Add new Task</button></div>

            <ul>
                {renderTodos()}
            </ul>
        </>
    )
};

//homeWork
//to do a Loader custom hook
