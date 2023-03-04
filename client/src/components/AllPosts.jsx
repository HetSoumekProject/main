import axios from 'axios';
import React,{useEffect, useState} from 'react'

const AllPosts = ({car}) => {
  console.log("that's",car);

  return (
    <div>
      <img src={car.image}/>
    </div>

   
  )
}

export default AllPosts
