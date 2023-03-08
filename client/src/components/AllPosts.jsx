
import React, { useState } from 'react'


const AllPosts = ({car,setCar,setView,view}) => {

  return (
    <div>
 <img className='cars-pic' src={car.images[0].image} onClick={()=>{setView(!view)
      setCar(car)
      }}/>
      <h1>
        {car.brand_name}
      </h1>
      <h4>
      ending in :  {car.ending_day}
      </h4>
      <div>
        
      </div>
    </div>
  )
}
export default AllPosts