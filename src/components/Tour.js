import React,{useState} from 'react'

const Tour = ({tour,removeTour}) => {
    const [readMore,setReadMore]=useState(false);
    console.log(tour);
  return (
    <div className='single-tour'>
        <img className='tour-image' src={tour.image}/>
      <p className='tour-info'>
      {readMore? `${tour.info}` : `${tour.info.substring(0,200)}...`}
      <button onClick={()=>setReadMore(!readMore)}>{!readMore? 'Show':'Hide'}</button>
      </p>
       <p className='tour-price'>Price: {tour.price}</p>
       
       <button className='delete-btn' onClick={()=>removeTour(tour.id)}>Remove</button>
    </div>
  )
}

export default Tour
