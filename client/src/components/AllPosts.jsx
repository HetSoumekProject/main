
import React from 'react'

const AllPosts = ({car}) => {

  return (
    <div>
      <img className='cars-pic' src={car.images[0].image}/>
    </div>
  )
}
export default AllPosts