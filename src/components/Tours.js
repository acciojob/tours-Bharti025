import React from 'react'
import Tour from './Tour.js';
const Tours = ({tours}) => {
    console.log(tours);
  return (
    <div>
     <h2>Available Tours</h2>
     <ul>
      {tours.map(tour=>
     <li key={tour.id}>
        <Tour tour={tour}/>
     </li>
      )}
    </ul> 
   
    </div>
  )
}

export default Tours
