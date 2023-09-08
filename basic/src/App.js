import logo from './logo.svg';
import './App.css';
import User from './User'
import {useState} from 'react';

function App() {
  const [data, setData] = useState(0);
  // function setData(){
  //   data = data+1;
  // }
  function setValue(){
     setData(data+1);
  }
  return (
    <div className= "App">
   <h1>Hello Abhi {data}</h1>
   {/* <button onClick={()=>setData(data+1)}>Click Me</button> */}
   <button onClick={()=>setValue(data+1)}>Click Me</button>
   <User/>
   </div>
  );
}

export default App;
