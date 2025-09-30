import React from 'react'

const Tour = ({tour,removeTour}) => {
    const [readMore,setReadMore]=useState(false);
    console.log(tour);
  return (
    <div className='single-tour'>
        <img className='tour-image' src={tour.image}/>
      <p className='tour-info'>
      {readMore? `${tour.info}` : `${info.substring(0,200)}...`}
      <button onClick={()=>setReadMore(!readMore)}>{readMore? 'Show less': 'Show More'}</button>
      </p>
       <p className='tour-price'>Price : {tour.price}</p>
       
       <button className='delete-btn' onClick={()=>removeTour(id)}>Delete</button>
    </div>
  )
}

export default Tour
