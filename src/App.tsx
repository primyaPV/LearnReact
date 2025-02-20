import React, { createContext, useState } from 'react';
import './App.css';
import { HelloWorld } from './components/HelloWorld';
import { Buttons } from './components/Buttons';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { FormHandle } from './components/FormHandle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { WelcomePage } from './components/WelcomePage';
import { LearUseEffect } from './learnHooks/LearnUseEffect';
import { ContectUser } from './learnHooks/ContectUser';
import { ContextContainer } from './learnHooks/ContextContainer';
import { ContextMainProps } from '../interfaces/Theme';

export const ThemeContext = createContext<ContextMainProps>({ theme: "light" });;

function App() {
// let getState = (mail:any)=>{
// console.log("mail from child",mail);

// }

// const path=[{ path: "/", element: <FormHandle /> },  
//   { path: "/loginPage", element: <LoginPage /> },  
//   { path: "/welcome", element: <WelcomePage /> } 
//  ]

 const [theme,setTheme]=useState<'light' | 'dark'>('light')

const toggleTheme = ()=>{
  setTheme((curr)=>(curr === "light" ? "dark":"light"))
}

  return (
    <ThemeContext.Provider value={{theme:theme}} >
      {/* <HelloWorld/> */}
      {/* <Buttons value="Buttons Component" label="Cancel Button"/> */}
      {/* <Buttons buttonHeight={55} buttonSize={12} buttonWidth={11} /> */}
      {/* <Counter></Counter>
      <Login/> */}
      

{/* <Router>
     <Routes>
      {path.map((route,index)=>(
        <Route key={index} path={route.path} element={route.element}/>
      ))} */}
        {/* <Route path="/" element={<FormHandle/>} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/welcome" element={<WelcomePage/>} /> */}
        {/* </Routes>
    </Router>
    <FormHandle getState={getState}/>
       */}
       {/* <LearUseEffect/> */}
       <h4>App Component</h4>
       <ContextContainer />
       {/* <LearUseEffect/> */}
       <button onClick={toggleTheme}>Set Theme</button>
    </ThemeContext.Provider>
    
  );
}

export default App;
