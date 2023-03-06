
import React, { useState } from 'react'


const AllPosts = ({car,setCar,setView,view}) => {

  return (
    <div>
      <img className='cars-pic' src={car.images[0].image}/>
    </div>
  )
}
export default AllPosts