import React from 'react';
import './App.css';
import { HelloWorld } from './components/HelloWorld';
import { Buttons } from './components/Buttons';
import { Counter } from './components/Counter';
import { Login } from './components/Login';
import { FormHandle } from './components/FormHandle';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div >
      {/* <HelloWorld/> */}
      {/* <Buttons value="Buttons Component" label="Cancel Button"/> */}
      {/* <Buttons buttonHeight={55} buttonSize={12} buttonWidth={11} /> */}
      {/* <Counter></Counter>
      <Login/> */}
{/* <BrowserRouter>
<Router>
  <Route path={'/'} element={<Navigation/>}>

  </Route>
</Router>
</BrowserRouter> */}

      {/* <Navigation/> */}
      <FormHandle/>
    </div>
    
  );
}

export default App;
