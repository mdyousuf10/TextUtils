
import React from 'react'
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){  
      setMode('dark');
      document.body.style.backgroundColor = '#051532';
      showAlert("Dark mode has been enabled", "success")
      document.title="TextUtil- Dark Mode";
      
    }  
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success")
      document.title="TextUtil-Home";
    }
  }
  return (
    <>
     <Router>   
       {/* <Navbar title="Textutils" aboutUs= "About TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <dis className="container my-3" >
        <TextForm showAlert={showAlert} heading ="Enter text below to Analyze" mode={mode}/> 

        <About/>
        </dis> */}
       <Navbar title="Textutils" aboutUs= "About TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <Switch>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading ="Enter text below to Analyze" mode={mode}/> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
     </Router>   
    </>  
  );
}

export default App;
  