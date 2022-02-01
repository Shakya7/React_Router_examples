import React from 'react';
import './App.css';
import {Routes, Route, Link, useParams} from "react-router-dom";

function Home() 
{
  
  return (
    <React.Fragment>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </React.Fragment>
  );
}

function About() {
  return (
    <React.Fragment>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </React.Fragment>
  );
}

function Page(){

  const obj1=useParams();
  console.log(obj1);
  return(
    <div>
      <p>{`Page ${obj1.id}`}</p>
    </div>
  )
}

function App() {
  let input=1;
  return (

    <div className="App">
      <h1>WELCOME TO THE ROUTER</h1>
      <nav style={{width:"100vw", height:"20vh", backgroundColor:"yellow"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link onClick={(e)=>{
          input=prompt("Enter the page #");
        }} to={`/pages/${input}`}>Page #</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/pages/:id" element={<Page/>}/>
      </Routes>
    </div>
  );
}

export default App;
