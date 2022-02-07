
import './App.css';
import {Link,Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';


function Home(){
  return(
    <h2>
      HomePage
    </h2>
  )
}
function About(){
  
  return(
    <h2>
      About
    </h2>
  )
}


function Error(props){
  return (
    <div>
      <h2>Nothing to see here</h2>
      <Link onClick={(e)=>{
          props.setA()
        }} to="/">Go to homepage</Link>
    </div>
  )
}

function App() {

  const [active,setActive]=useState("home");
  useEffect(()=>{
    console.log(active);
  },[active]);
  const changeS=()=>{
    setActive("home");
  }
  return (
    <div className="App">
      <h1>Custom Link Example</h1>
      <br/>
      <p>This example demonstrates how to create a custom Link component that knows whether or not it is "active" using the low-level useResolvedPath() anduseMatch() hooks.</p>
      <div style={{display:"flex", flexDirection:"column"}}>
        <div>
          <Link onClick={(e)=>{
            setActive("home");
          }} to="/">Home</Link>
          {
            active==="home"?<span style={{marginLeft:"20px"}}>(active)</span>:""
          }
        </div>
        <div>
          <Link onClick={(e)=>{
            setActive("about");
          }} to="/about">About</Link>
          {
            active==="about"?<span style={{marginLeft:"20px"}}>(active)</span>:""
          }
        </div>
        <Link to={"/error"}>Error Link</Link>
      </div>
      <hr/>          
      {/*Here we dont have to include the Outlet component*/}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="*" element={<Error setA={changeS}/>}/>
      </Routes>
    </div>
  );
}

export default App;
