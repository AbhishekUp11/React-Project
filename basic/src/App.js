import logo from './logo.svg';
import './App.css';
import User from './User'
import {useState} from 'react';

function App() {

  return (
    <div className= "App">
   <h1>Hello Abhi</h1>
   <User name={"Abhi"} email={"abc@123.com"} other={{lives:"home", proud:"Indian"}}/>
   </div>
  );
}

export default App;
