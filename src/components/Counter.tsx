//useState hook

import React, { useState } from 'react'

export const Counter = () => {
   const[count,setState]= useState(0);
   let count2= 1;

   const handleFun= ()=>{
    // count2++
    // console.log(count2)
    

   }


  return (
    <div>
        <button onClick={()=>setState(count + 2)}>Add count</button>
        <p>The count is {count}</p>
        <button >Add count five</button>
       
    </div>
  )
}
