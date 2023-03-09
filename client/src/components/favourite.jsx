import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FavoriteList(props) {
    const [favorites, setFavorites] =useState([]);
    useEffect(() => {
              axios.get(`/api/fav/checkfav/${props.userId}`)
        .then(response => {
          console.log(response.data);
          setFavorites(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [props.userId]);
  
    return (
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            Car ID: {favorite.carId}
          </li>
        ))}
      </ul>
    );
  }

export default FavoriteList;
