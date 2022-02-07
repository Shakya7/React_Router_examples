
import './App.css';
import {Link,Outlet,Routes, Route} from "react-router-dom";


function Home(){
  return(
    <h2>
      Home
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
function Dashboard(){
  return(
    <h2>
      Dashboard
    </h2>
  )
}
function Error(){
  return (
    <div>
      <h2>Nothing to see here</h2>
      <Link to="/">Go to homepage</Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Basic Example 1</h1>
      <br/>
      <br/>
      <p>This example demonstrates some of the core features of React Router including nested Route, Outlets, Links, and using a "*" route (aka "splat route") to render a "not found" page when someone visits an unrecognized URL.</p>
      <div style={{display:"flex", flexDirection:"column"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/error"}>Nothing here</Link>
      </div>
      <hr/>          
      {/*Here we dont have to include the Outlet component*/}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
