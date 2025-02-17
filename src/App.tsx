import React from 'react';
import './App.css';
import { HelloWorld } from './components/HelloWorld';
import { Buttons } from './components/Buttons';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { FormHandle } from './components/FormHandle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { WelcomePage } from './components/WelcomePage';

function App() {
  return (
    <div >
      {/* <HelloWorld/> */}
      {/* <Buttons value="Buttons Component" label="Cancel Button"/> */}
      {/* <Buttons buttonHeight={55} buttonSize={12} buttonWidth={11} /> */}
      {/* <Counter></Counter>
      <Login/> */}
<Router>
     <Routes>
        <Route path="/" element={<FormHandle />} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/welcome" element={<WelcomePage/>} />
        </Routes>
    </Router>
    
      
    </div>
    
  );
}

export default App;
