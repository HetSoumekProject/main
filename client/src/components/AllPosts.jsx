/* eslint-disable jsx-a11y/alt-text */

import axios from 'axios';
import React, { useState } from 'react'



const AllPosts = ({user,car,setCar,setView,view}) => {
  const handleSubmitfav = (event) => {
    
    console.log('user',user);
    console.log('carr',car)
    event.preventDefault();

    axios.post(`http://localhost:3000/api/fav/addfav/${user}/${car.id}`)
    
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleSubmitfav2 = (event) => {
    event.preventDefault();
    
    axios.delete(`/api/fav/deletefav/${user}/${car.id}`)
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div className='oneCard'>

 { car.images[0]?<img className='cars-pic' src={car.images[0].image} onClick={()=>{setView(!view)
      setCar(car)
      }}/> :"doesnt exist"}
      <h1>
        {car.brand_name}
      </h1>
      <h4>
      ending in :  {car.ending_day}
      </h4>
      <div>
        <button type='button' onClick={()=>setView(!view)}>Bid!!</button>
        <button type='button' onClick={handleSubmitfav}>add to favorite <h1>☆</h1></button>
        <button type='button' onClick={handleSubmitfav2}>remove from favorite<h1>★</h1></button>
      </div>
    </div>
  )
}           
export default AllPosts;