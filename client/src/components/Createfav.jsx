import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewFavoriteForm=(props)=> {
  const [carId, setCarId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post(`/api/fav/addfav/${props.userId}`, { carId: carId })
      .then(response => {
        console.log(response.data); 
        setCarId('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
         <button type="submit"value={carId}
         >Add Favorite</button>
    </form>
  );
}
export default NewFavoriteForm;