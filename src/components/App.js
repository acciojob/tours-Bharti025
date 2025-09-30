import React,{useEffect,useState} from "react";
import Tours from './Tours.js'
import Loading from './Loading.js'
const App = () => {
  const [tours,setTours]=useState([]);
  const [loading,setLoading]=useState(true);
    useEffect(()=>{
    fetch('./tour.json').then((response)=>response.json()).
    then((data)=>
      {
      console.log(data);
      setTours(data);
    setLoading(false);
  })
    .catch((err)=>{
      console.log(err);
      setLoading(false);
    })
    },[]);

if (loading) {
    return (
      <main id="main">
        <Loading />
      </main>
    );
  }

    return(
      <main id="main">
        <Tours tours={tours}/>
      </main>
    )
}
export default App;
