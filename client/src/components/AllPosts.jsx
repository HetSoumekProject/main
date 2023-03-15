import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './cars.css'
import FavoriteList from './FavoriteList';

const AllPosts = ({car, setCar, setView, view, user}) => {
  useEffect(() => {
    console.log('use all postr', user.id);
    console.log('carr', car)
  }, [])

  const handleSubmitfav = async (event) => {
    event.preventDefault();
    console.log("user ", localStorage)
    console.log("car", car.id)

    try {
      const response = await axios.post(`http://localhost:3000/api/fav/addfav/${user.id}/${car.id}`)
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='body'>
      {console.log(user,"useeeer")}
      <div className="box-container">
        <div >
          <button type='button' id='add' onClick={handleSubmitfav} className="btn" > ☆
          </button>
        </div>
        <div className="img-container">
          {car.images[0] ? <img src={car.images[0].image} onClick={() => {
            setView(!view)
            setCar(car)
          }} /> : "doesn't exist"}
        </div>
        <div>
          <h1 className="title">
            {car.brand_name}
          </h1>
          <h4 className="character">
            ending in :  {car.ending_day}
          </h4>
          <div>
            {/* <Count/> */}
          </div>
          <div className="character">
            <button type='button' onClick={() => setView(!view)}>Bid!!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
