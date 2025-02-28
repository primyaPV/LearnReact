import React, { useState } from 'react'
import './ToDo.css';
import { AddTask } from './AddTask';

export const ToDo = () => {

    const [addedTask, setAddedTask] = useState([""]);
    const [checkedTasks, setCheckedTasks] = useState(Array(addedTask.length).fill(false));

    const handleGetTask = (data: string): void => {
        // setAddedTask((allTask)=>[...allTask,data]) 
        console.log("data",data);
                  addedTask.push(data)
        setAddedTask([...addedTask]);
        console.log("addedTask",addedTask);
        
    }
    const deleteTask = (index: number) => {
        setAddedTask(prevVal => prevVal.filter((data, i) =>{

            return i !== index
            
        } ));
        setCheckedTasks(prevVal => prevVal.filter((data, i) =>{
            return i !== index
           
        } ));
       // setAddedTask(prevVal=>prevVal.filter((_,i)=>i !== index));
    }
    
    // const deleteTask = (index: number) => {
    //     setAddedTask((preVal) => {

    //         let newarr = [...preVal];
    //         newarr.splice(index, 1);
    //         return newarr;
    //     })
    //     setCheckedTasks((preVal) => {
    //         let newVal = [...preVal];
    //         newVal.splice(index, 1);
    //         return newVal;
    //     })
    // }
    
    const handleCheckboxChange = (index: number) => {
        // Toggle the checked state
        const newCheckedTasks = [...checkedTasks];
        newCheckedTasks[index] = !newCheckedTasks[index];
        setCheckedTasks(newCheckedTasks);
    };


    return (
        <div className="container">
            <h1>To-Do List</h1>

            <div className='home'>
                <AddTask onAddTask={handleGetTask} />
            </div>
            <ul>

                {addedTask.map((task, index) => (
                    <li key={index} className="task-item">
                        
                        {task && (
                            <>
                                <input type="checkbox" checked={checkedTasks[index]}
                                    onChange={() => handleCheckboxChange(index)} />
                                <label className={checkedTasks[index] ? 'strikethrough' : ''}>
                                    {task}
                                </label>
                                <button onClick={() => { deleteTask(index) }} className="delete-icon">X</button>
                            </>
                        )}
                    </li>
                ))}
                {/* <li>
                <input type="checkbox" id="task1"/>
                <label >task 1</label>
                <button className="delete-icon">X</button>
                </li>
                <li>
                <input type="checkbox" id="task1"/>
                <label >task 2</label>
                <button className="delete-icon">X</button>
                </li> */}
            </ul>

        </div>
    )
}
