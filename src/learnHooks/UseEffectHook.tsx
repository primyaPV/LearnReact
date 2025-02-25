import React, { useEffect } from 'react'

export const UseEffectHook = () => {


useEffect(()=>{
    
    console.log("new component with use effect");
    
},[])

  return (
    <div>UseEffectHook</div>
  )
}
