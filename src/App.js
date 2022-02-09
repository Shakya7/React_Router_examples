
import './App.css';
import {Link,Routes, Route, Outlet, useSearchParams} from "react-router-dom";
import { useEffect, useState} from 'react';


function Home(){
  return(
    <h2>
      <Outlet/>
    </h2>
  )
}

function Result(props){
  console.log(props.ddd);
  return(
    <div>
      <h5>The current form values are: </h5>
      <div>
        {<div>{"{"}
          <p style={{marginLeft:"50px"}}>{`"toppings": [${props.ddd.toppings}],`}</p>
          <p style={{marginLeft:"50px"}}>{`"crust": ${props.ddd.crust},`}</p>
          <p style={{marginLeft:"50px"}}>{`"extraCheese": ${props.ddd.extraCheese}`}</p>
          {"}"}
        </div>  
        }
          
        
      </div>
    </div>
  )
}


function Error(props){
  return (
    <div>
      <h2>Nothing to see here</h2>
      <Link onClick={(e)=>{
          props.setA()
        }} to="/">Go to homepage</Link>
      <Link to="https://google.com">Google</Link>
    </div>
  )
}

function App() {

  const [url,setUrl]=useSearchParams({
    toppings:"",
    crust: "",
    extraCheese:false
  });

  const [stateData,setStateData]=useState({
    toppings:url.get("toppings").split(","),
    crust:url.get("crust"),
    extraCheese:url.get("extraCheese")
  })

  useEffect(()=>{
    if(!stateData.toppings[0])
      stateData.toppings.shift()
    console.log(stateData);
    
  },[Object.fromEntries([...url]),stateData]);

  /*const handleData=(e)=>{
    setDataPep((prev)=>!prev);
    console.log(e.target.check);

    
  }*/
  
  const handleData1=(e)=>{
    console.log("This is the first line of handle function --->");
    //Value is False -->not checked
    
      
      /*const x=stateData.toppings.push(e);
      console.log(x);
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x});*/
      //console.log("The box is not checked", e);
    //}
    //else if(dataPep){   //Value is true -->checked
      
      /*const x=stateData.toppings;
      //const filterArr=x.filter(helperfunc);
      for(var i=0;i<x.length;i++){
        if(x[i]===e)
          x.splice(i,1);
      }
      console.log(x);
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x});*/
      //console.log("The box is checked", e);
    //url.get("toppings").split(",").includes("pepperoni")
    if(url.get("toppings").split(",").includes(e)){
      const x=stateData.toppings;
      for(var i=0;i<x.length;i++){
        if(x[i]===e)
          x.splice(i,1);
      }
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x})
    }
    else{
      const x=stateData.toppings;
      x.push(e);
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x})
    }
  }
  const handleData2=(e)=>{
    if(url.get("toppings").split(",").includes(e)){
      const x=stateData.toppings;
      for(var i=0;i<x.length;i++){
        if(x[i]===e)
          x.splice(i,1);
      }
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x})
    }
    else{
      const x=stateData.toppings;
      x.push(e);
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x})
    }
  }
  const handleData3=(e)=>{
    if(url.get("toppings").split(",").includes(e)){
      const x=stateData.toppings;
      for(var i=0;i<x.length;i++){
        if(x[i]===e)
          x.splice(i,1);
      }
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x})
    }
    else{
      const x=stateData.toppings;
      x.push(e);
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:x.toString()
      });
      setStateData({...stateData,toppings:x})
    }
  }

  /*const handlerFunc=(e)=>{
    let arr1=url.get("toppings").split(",");
    //console.log(arr1.includes(e))
    if(!arr1.includes(e)){
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:url.get("toppings").concat(`,${e}`)
      })
    }
    else if(arr1.includes(e)){
      //const tops=url.get("toppings")
      //let xxx=url.get("toppings").split(",");
      const ind=arr1.indexOf(e);
      console.log(ind);
      arr1=arr1.splice(ind,1);
      setUrl({
        ...Object.fromEntries([...url]),
        toppings:arr1.join(",")
      })
    }
  }*/
  const handlerRadio=(e)=>{
    if(url.get("crust")!==e){
      //setUrl({toppings:url.toppings,crust:e});
      setUrl({
        ...Object.fromEntries([...url]),
        crust:e
      });
      setStateData({...stateData,crust:e});
    }
    else {
      setUrl(Object.fromEntries([...url]));
      setStateData(stateData);

    } 
  }
  const handlerFuncCheese=(e)=>{
    if(url.get("extraCheese")!=="true"){
      setUrl({
        ...Object.fromEntries([...url]),
        extraCheese:true
      })
      setStateData({...stateData,extraCheese:true});
    }
    else if(url.get("extraCheese")==="true"){
      setUrl({
        ...Object.fromEntries([...url]),
        extraCheese:false
      })
      setStateData({...stateData,extraCheese:false});
    }
  }

 


  
  return (
    <div className="App">
      <h1>Custom Query Parsing Example</h1>
      <br/>
      <p>This example demonstrates how to store a complex data structure in a URL query parameter.</p>
      <br/>
      <p>Each time a field in the form below changes, the URL is updated with a serialized version of the form's values. To see the effect this has, manipulate some fields in the form. Then, copy the URL in the address bar and paste it into a new tab in your browser to see the form in the exact same state as when you left it!
      </p>
      <br/>
      <p>What would you like on your pizza?
      </p>
      <div style={{display:"flex", flexDirection:"column"}}>
        <form>
          <div>
            <div>
              <input onChange={(e)=>{
                //handleData(e);
                //console.log(typeof e.target.value);
                handleData1(e.target.value);
                //handlerFunc(e.target.value);
              }} type="checkbox" value="pepperoni" defaultChecked={url.get("toppings").split(",").includes("pepperoni")}/>
              <label>Pepperoni</label>
            </div>
            <div>
              <input onChange={(e)=>{
                //handleCheckBoxValues();
                //handlerFunc(e.target.value);
                handleData2(e.target.value);
              }} type="checkbox" value="bell-peppers"  defaultChecked={url.get("toppings").split(",").includes("bell-peppers")}/>
              <label>Bell Peppers</label>
            </div>
            <div>
              <input onChange={(e)=>{
                //handlerFunc(e.target.value);
                handleData3(e.target.value);
              }} type="checkbox" value="olives" defaultChecked={url.get("toppings").split(",").includes("olives")}/>
              <label>Olives</label>
            </div>
          </div>
          <br/>
          <div>
            <div>
              <input onChange={(e)=>{
                handlerRadio(e.target.value);
              }}
              type="radio" value="regular" name='crust' defaultChecked={url.get("crust")==="regular"}/>
              <label>Regular Crust</label>
            </div>
            <div>
              <input onChange={(e)=>{
                handlerRadio(e.target.value);
              }} type="radio" value="thin" name='crust' defaultChecked={url.get("crust")==="thin"}/>
              <label>Thin Crust</label>
            </div>
            <div>
              <input onChange={(e)=>{
                handlerRadio(e.target.value);
              }} value="deep" type="radio" name='crust' defaultChecked={url.get("crust")==="deep"}/>
              <label>Deep Dish</label>
            </div>
          </div>
          <br/>
          <div>
            <input onChange={(e)=>{
              handlerFuncCheese(e.target.value);
            }} value="extra-cheese" type="checkbox" defaultChecked={url.get("extraCheese")==="true"}/>
            <label>Extra Cheese</label>
          </div>
        </form>
      </div>
      <hr/>          
      {/*Here we dont have to include the Outlet component*/}
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Result ddd={stateData}/>}/>
        </Route>  
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
