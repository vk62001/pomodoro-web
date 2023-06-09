import { useEffect, useState } from 'react';
import useTimer from '../CustomHook/useTimer';
import { Input } from './Input/Input';
import { getArray, setCacheArray } from '../cache/cache';


export const Todo = () => {
    // const [initialTime, setInitialTime] = useState<number>(0)
    // const { time, isRunning, setIsRunning, stopTimer } = useTimer(initialTime);

//   const handleChangeTimer = () => {
//     setIsRunning((prevIsRunning) => !prevIsRunning);
//   };

//   const handleResetTimer = () => {
//     if (stopTimer) {
//       stopTimer();
//     }
//     setIsRunning(true);
//   };

    const [task, setTask] = useState<string>('');
    const [todos, setTodos] = useState<any>([]);

    const addNewTask = () => {
        //get Array Task
        //push ArrayTask
        //add to arrayTask
        const newTask:any = {
            id: new Date(),
            task: task
        };
        const arrayTaskTemp = localStorage.getItem('arrayTask')||'';
        if(arrayTaskTemp.length===0){
            setCacheArray('arrayTask', [newTask]);
            setTodos([newTask]);
        }else{
            const temp = JSON.parse(arrayTaskTemp);
            temp.push(newTask);
            setTodos(temp);
            setCacheArray('arrayTask', temp);    
        }
        setTask('');
    };

    useEffect(() => {
      const arrayTaskTemp = localStorage.getItem('arrayTask')||'';
      if(arrayTaskTemp.length>0){
        setTodos(JSON.parse(arrayTaskTemp));
      }
        
    }, [])


    
const renderTodos = () =>{
    if(Object.keys(todos).length===0)return;
    return todos.map((e:any)=>(
        <li>
            {e.task}
        </li>
    ));
}

    return (
        <>
        <div>Todo</div>
        {/* <h1>Timer: {time} segundos</h1>
         <button onClick={handleChangeTimer}>{isRunning ? 'Detener' : 'Iniciar'}</button>
        <button onClick={handleResetTimer}>Reiniciar</button>
        <button onClick={()=>setInitialTime(1500)}>Long Time</button> */}

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
