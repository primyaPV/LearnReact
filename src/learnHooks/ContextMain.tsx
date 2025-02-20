import React, { useContext } from 'react'
import { ContectUser } from './ContectUser'
import { ThemeContext } from '../App';


export const ContextMain = ({}) => {
  const {theme}= useContext(ThemeContext);
  const textStyle={
    backgroundColor:theme === "light" ? "white":"black",
    color:theme === "light" ? "black":"white"
 }
  return (
    <div>
      <h4 style={textStyle}>ContextMain</h4>
      <ContectUser/>
    </div>
  )
}
