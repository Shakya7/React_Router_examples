import React from 'react';
import { useState } from 'react';
import './App.css';
import {Routes, Route, Link, useParams, Navigate, Outlet, NavLink, useNavigate, useLocation} from "react-router-dom";
import axios from "axios";

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

function Anime() {
  return (
    <React.Fragment>
      <main>
        <h2>Anime Section</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet/>
    </React.Fragment>
  );
}

function Movies(){
  const [movieName, setMovieName]=useState("");
  const navigate=useNavigate();
  
  return(
    <div>
      <p>This is the Movies Section</p>
      <input type="text" onChange={(e)=>{
        setMovieName(e.target.value);
      }}/>
      <NavLink style={({isActive})=>{
        return{
          color: isActive?"pink":"yellow"
        }
      }} to={`/movies/${movieName}`}><div>{movieName}</div></NavLink>
      <NavLink to={`/movies/test`}><div>test</div></NavLink>
      <Link to={`/movies/${movieName}`}><button onClick={async(e)=>{
        console.log("Movie searched is :",movieName);
        /*navigate(`/movies/${movieName}`,{state:{
          abc:3,
          xyz:10
        }});*/
        
        //const result=await axios.post
      }}>Search</button>
      </Link>
      <div style={{width:"40vw", height:"50vh", backgroundColor:"red"}}>
        <Outlet/> 
      </div>
    </div>
  )
}
function MovieDetail(){
  const {movieName}=useParams();
  //const location=useLocation();
  const navigation =useNavigate();

  return(
    <div>
      <h4>The movie is : {movieName}</h4>
      {/*<h5>{`The state of it is ${location.state.abc}`}</h5>*/}
      <button onClick={(e)=>{
        navigation("/dashboard",{
          state:{
            message1:"This is the dashboard screen",
            message2:"Redirected from the MovieData page"
          }
        })
      }}>Move to Dashboard</button>

    </div>
  )
}
function Dashboard(){

  const location=useLocation();
  return(
    <div>
      <h1>{location.state.message1}</h1>
      <h2>{location.state.message2}</h2>
      <p>Hello</p>
      <Link to="/movies">Movies</Link>
    </div>
  )
}

function App() {
  let input=1;           //it'll only output 1, use useState here since let value is not changing
  return (

    <div className="App">
      <h1>WELCOME TO THE ROUTER</h1>
      <nav style={{width:"90vw", height:"20vh", backgroundColor:"yellow"}}>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/movies">Movies</Link>
        <br/>
        <Link to="/animes">Animes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/movies" element={<Movies/>}>
          <Route path="*" element={<div>ERROR</div>}/>
          <Route path=":movieName" element={<MovieDetail/>}/>
        </Route> 
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/animes" element={<Anime/>}>
          <Route index element={<div>
            <div>
              This is the anime data section
            </div>
          </div>}/>
          <Route/>
        </Route>

        {/*<Route path="*" element={<div>ERROR</div>}/>*/}
      </Routes>
    </div>
  );
}

export default App;
