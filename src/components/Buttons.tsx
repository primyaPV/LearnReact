import React from 'react'
import { buttonsInterface } from '../../interfaces/ButtonInterface'

export const Buttons = (props:buttonsInterface) => {

    // interface ButtonProps {
    //     label: string;           
    //     onClick: () => void;     
        
    //   }

    const success: any=()=>{
  alert(props.buttonHeight)
    }

    const cancel: any=()=>{
        alert("cancel Alert")
          }

    // const Buttons: React.FC<ButtonProps> = ({ label, onClick }) => {
    //     return (
    //       <button onClick={onClick} >
    //         {label}
    //       </button>
    //     );
    //   };

  return (
    <>
    <h3>Button Height : {props.buttonHeight} </h3>
    <h3>Button Size : {props.buttonSize} </h3>
    <h3>Button Width : {props.buttonWidth} </h3>
    <button onClick={success} >Success</button>
    
    </>
  )
}
