import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import css from './favorite.css'
function FavoriteList({ user }) {
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
  }, [user]);
  const handleDeleteFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/fav/deletefav/${user.id}/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='favoListt'>
      {favorites.map((favorite) => (

<div class="product-card">
		<div class="badge">fav</div>
		<div class="product-tumb">
			<img  src={favorite.car.images[0].image}  />
		</div>
		<div class="product-details">
			<span class="product-catagory">{favorite.car.brand_name}</span>
			<h4 className='h4fav'><a href="">{favorite.car.brand_name}</a></h4>
			<p>{favorite.car.description}<br/>
      Transmission: {favorite.car.transmission} <br/>
      Body Style: {favorite.car.body_style}<br/>
      Year: {favorite.car.year}
      </p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$Initial Price</small>TND{favorite.car.initial_price}</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a> <br/>
          <button
                type="button"
                style={{ color: 'red' }}
                className="btn btn-danger"
                onClick={() => handleDeleteFavorite(favorite.car.id)}
              >
                Delete
              </button>
				</div>
			</div>
		</div>
	</div>
        ))}    
     
        
       </div>
  );
}
export default FavoriteList;