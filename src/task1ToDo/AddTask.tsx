import React, { useEffect, useRef } from 'react'

export const AddTask = ({ onAddTask }: { onAddTask: (task: string) => void }) => {
    const hadleSubmit =(e:any)=>{
        e.preventDefault()
        const formData=new FormData(e.target)
        const task=Object.fromEntries(formData)
        const taskData=task.task
        console.log("task...",taskData)
        onAddTask(taskData as string);
       // location.reload()
       
    }

    
  return (
    <form onSubmit={hadleSubmit}>
        <input type='text' name='task' ></input>

            <input type='submit' className='addTask' value="Add Task"/>
            
    </form>
  )
}

