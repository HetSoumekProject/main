
import React from 'react'

const AllPosts = ({car}) => {

  return (
    <div>
      <img className='imaget' style={{height:"200px",width:"300px"}} src={car.images[0].image}/>
    </div>
  )
}
export default AllPosts