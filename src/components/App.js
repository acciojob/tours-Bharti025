import React,{useEffect,useState} from "react";
import Tours from './Tours.js'
const App = () => {
  const [tours,setTours]=useState([]);
    useEffect(()=>{
    fetch('./tour.json').then((response)=>response.json()).
    then((data)=>
      {
      console.log(data);
      setTours(data);})
    .catch((err)=>{
      console.log(err);
    })
    },[]);

    return(
      <main id="main">
        <Tours tours={tours}/>
      </main>
    )
}
export default App;
