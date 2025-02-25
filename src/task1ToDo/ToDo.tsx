import React, { useState } from 'react'
import './ToDo.css';
import { AddTask } from './AddTask';

export const ToDo = () => {

    const [addedTask,setAddedTask]=useState([""]);

    const handleGetTask=(data:string):void=>{
       // setAddedTask((allTask)=>[...allTask,data])           
        setAddedTask((prevTasks) => [...prevTasks, data]);
        }

        const deleteTask=(index:number)=>{

            setAddedTask((preVal)=>{
                
             // console.log("prev val",preVal);

                let newarr=[...preVal]
                newarr.splice(index,1)
                return newarr
            })

                      

        }

  
    return (
        <div className="container">
            <h1>To-Do List</h1>

            <div className='home'>
            <AddTask onAddTask={handleGetTask}/>
            </div>
            <ul>

            {addedTask.map((task, index) => (
                    <li key={index} className="task-item">
                        {/* Render checkbox and delete icon only if task exists */}
                        {task && (
                            <>
                                <input type="checkbox"  />
                                <label >{task}</label>
                                <button onClick={()=>{deleteTask(index)}} className="delete-icon">X</button>
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
