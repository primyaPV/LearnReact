import React, { useEffect, useRef, useState } from 'react'

export const AddTask = ({ onAddTask }: { onAddTask: (task: string) => void }) => {
    // const [task1, setTask] = useState('');
    // const inputRef = useRef<HTMLInputElement>(null);

    const hadleSubmit =(e:any)=>{
        
        e.preventDefault()
        const formData=new FormData(e.target);
        const task=Object.fromEntries(formData);
        const taskData=task.task;
        console.log("task...",taskData);
        onAddTask(taskData as string);
       // location.reload()
      // setTask('');
       
    }

    
  return (
    <form onSubmit={hadleSubmit}>
        <input type='text' name='task' ></input>

            <input type='submit' className='addTask' value="Add Task"/>
            
    </form>
  )
}

