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
  return (
    <div className='oneCard'>
     <div> <button type='button' id='add' onClick={handleSubmitfav}   > ☆</button></div>
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
      </div>
    </div>
  )
}
export default AllPosts
;