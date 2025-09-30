import React from 'react'

const Tour = ({tour}) => {
    console.log(tour);
  return (
    <div className='single-tour'>
        <img className='tour-image' src={tour.image}/>
      <p className='tour-info'>{tour.info}</p>
       <p className='tour-price'>Price : {tour.price}</p>
       
       <button className='delete-btn' onClick={()=>removeTour(id)}>Delete</button>
    </div>
  )
}

export default Tour
