import axios from 'axios';
import React,{useEffect, useState} from 'react'

const AllPosts = ({car}) => {

  return (
    <div>
      <img style={{height:"100px",width:"100px"}} src={car.images[0].image}/>
    </div>

   
  )
}

export default AllPosts
