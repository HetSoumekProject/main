
import React, { useState } from 'react'


const AllPosts = ({car,setCar,setView,view}) => {

  return (
    <div>
 <img className='imaget' style={{height:"200px",width:"300px"}} src={car.images[0].image} onClick={()=>{setView(!view)
      setCar(car)
      }}/>
      <div>
        
      </div>
    </div>
  )
}
export default AllPosts