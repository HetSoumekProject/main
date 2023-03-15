import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FavoriteList({ user, car }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/fav/checkfav/${user.id}`);
        console.log(response.data, 'check fav');
        console.log('usser', user);
        setFavorites(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorites();
  }, [user, car]);

  const handleDeleteFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/fav/deletefav/${user.id}/${car.id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ color: 'white' }}>brand_name</th>
            <th style={{ color: 'white' }}>description</th>
            <th style={{ color: 'white' }}>initial_price</th>
            <th style={{ color: 'white' }}>transmission</th>
            <th style={{ color: 'white' }}>body_style</th>
            <th style={{ color: 'white' }}>min_amount</th>
            <th style={{ color: 'white' }}>year</th>
            <th style={{ color: 'white' }}>delete</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite) => (
            <tr key={favorite.id}>
              <td style={{ color: 'white' }}>{favorite.car.brand_name}</td>
              <td style={{ color: 'white' }}>{favorite.car.description}</td>
              <td style={{ color: 'white' }}>{favorite.car.initial_price}</td>
              <td style={{ color: 'white' }}>{favorite.car.transmission}</td>
              <td style={{ color: 'white' }}>{favorite.car.body_style}</td>
              <td style={{ color: 'white' }}>{favorite.car.min_amount}</td>
              <td style={{ color: 'white' }}>{favorite.car.year}</td>
              <td>
                <button
                  type="button"
                  rel="tooltip"
                  className="btn btn-danger btn-sm btn-icon"
                  onClick={() => handleDeleteFavorite(favorite.car.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoriteList;