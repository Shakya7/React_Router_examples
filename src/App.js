
import './App.css';
import {Link,Outlet,Routes, Route,useParams,useSearchParams} from "react-router-dom";
import { snArr } from './data';



function Home(){
  return(
    <h2>
      HomePage
    </h2>
  )
}
function SneakerPage(){
  return(
    <div>
      <h2>This is the sneaker section</h2>
      <Outlet/>
    </div>
  )
}
function All(){
  const {sneakers} =snArr;
  return(
    <div>
      <h2>
        All sneakers
      </h2>
      <div style={{padding:"30px"}}>
        <div style={{borderRadius:"20px",backgroundColor:"lightseagreen"}}>Search results: {sneakers.length}</div>
        <ul style={{borderRadius:"20px",backgroundColor:"lightblue",display:'grid',gridGap:10,gridTemplateColumns:"1fr 1fr 1fr", listStyle:"none", padding:"5vmax"}}>
        {
          sneakers.map((e,i)=><li style={{borderRadius:"20px",backgroundColor:"red", width:"25vmax", height:"30vmin"}} key={i}>{e.name}</li>)
        }
        </ul>
      </div>
    </div>

  )

}

function Card(){
  const params=useParams();
  console.log(params);
  const {sneakers} =snArr;
  const ar=sneakers.filter(e=>e.brand_N===params.brand);
  console.log(ar);
  //console.log(sneakers);
  return(
    <div>
      <h2>{params.brand} sneakers</h2>
      <div style={{padding:"30px"}}>
        <div style={{borderRadius:"20px",backgroundColor:"lightseagreen"}}>Search results: {ar.length}</div>
        <ul style={{borderRadius:"20px",backgroundColor:"lightblue",display:'grid',gridGap:10,gridTemplateColumns:"1fr 1fr 1fr", listStyle:"none", padding:"5vmax"}}>
        {
          ar.map((e,i)=><li style={{borderRadius:"20px",backgroundColor:"red", width:"25vmax", height:"30vmin"}} key={i}>{e.name}</li>)
        }
        </ul>
      </div>
    </div>
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
      <h1>Custom Filter Link Example</h1>
      <br/>
      <p>This example demonstrates how to create a "filter link" like one that is commonly used to filter a list of products on an e-commerce website. The component is a custom Link that knows whether or not it is currently "active" by what is in the URL query string.</p>
      <h4>Filter by brand</h4>
      <div style={{display:"flex", flexDirection:"column"}}>
        <Link to="/">Home</Link>
        <Link to={"/sneakers"}>All</Link>
        <Link to={"/sneakers/nike"}>Nike</Link>
        <Link to={"/sneakers/adidas"}>Adidas</Link>
        <Link to={"/sneakers/puma"}>Puma</Link>
        <Link to={"/error"}>Error Link</Link>
      </div>
      <hr/>          
      {/*Here we dont have to include the Outlet component*/}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sneakers" element={<SneakerPage/>}>
          <Route index element={<All/>}/>
          <Route path=":brand" element={<Card/>}/>
        </Route>  
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
