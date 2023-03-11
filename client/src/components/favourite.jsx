import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FavoriteList({user}) {
    const [favorites, setFavorites] =useState([]);
    
    useEffect(() => {
              axios.get(`http://localhost:3000/api/fav/checkfav/${user}`)
        .then(response => {
          console.log(response.data);
          setFavorites(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [user]);
  
    return (
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            Car: {favorite.carId}
          </li>
        ))}
      </ul>
    );
  }

export default FavoriteList;
