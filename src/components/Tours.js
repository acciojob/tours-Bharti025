import React from 'react'
import Tour from './Tour.js';
const Tours = ({tours}) => {
    const removeTour=(id)=>{
       return tours.filter((tour)=>tour.id!==id)
    }
    console.log(tours);
  return (
    <div>
     <h2>Available Tours</h2>
     <ul>
      {tours.map(tour=>
     <li key={tour.id}>
        <Tour tour={tour} removeTour={removeTour}/>
     </li>
      )}
    </ul> 
   
    </div>
  )
}

export default Tours
