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
      await axios.delete(`http://localhost:3000/api/fav/deletefav/${user.id}/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='favvvv'>
      <table className="table">
        <thead>
          <tr>
            <th style={{ color: 'black' }}>brand_name</th>
            <th style={{ color: 'black' }}>description</th>
            <th style={{ color: 'black' }}>initial_price</th>
            <th style={{ color: 'black' }}>transmission</th>
            <th style={{ color: 'black' }}>body_style</th>
            <th style={{ color: 'black' }}>min_amount</th>
            <th style={{ color: 'black' }}>year</th>
            <th style={{ color: 'black' }}>delete</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((favorite) => (
            <tr key={favorite.id}>
              <td style={{ color: 'grey' }}>{favorite.car.brand_name}</td>
              <td style={{ color: 'grey' }}>{favorite.car.description}</td>
              <td style={{ color: 'grey' }}>{favorite.car.initial_price}</td>
              <td style={{ color: 'grey' }}>{favorite.car.transmission}</td>
              <td style={{ color: 'grey' }}>{favorite.car.body_style}</td>
              <td style={{ color: 'grey' }}>{favorite.car.min_amount}</td>
              <td style={{ color: 'grey' }}>{favorite.car.year}</td>
              <td>
                <button
                  type="button"
                  rel="tooltip"
                  style={{ color: 'black' }}
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