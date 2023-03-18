import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    <Row xs={1} sm={2} md={3} lg={3} className="g-4">
      {favorites.map((favorite) => (
        <Col key={favorite.id}>
          <Card className="h-100" style={{width:"300px",position:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-between",padding:"20px",marginLeft:"100px"}}>
            <Card.Img variant="top" src={favorite.car.images[0].image} style={{width:"250px"}} />
            <Card.Body>
              <ul style={{ listStyle: 'disc', textAlign: 'center' }}>
              <li style={{ color: 'black' }}>{favorite.car.brand_name}</li>
              <Card.Text style={{ color: 'black' }}>{favorite.car.description}</Card.Text>
                <li style={{ color: 'black' }}>Initial Price: {favorite.car.initial_price}</li>
                <li style={{ color: 'black' }}>Transmission: {favorite.car.transmission}</li>
                <li style={{ color: 'black' }}>Body Style: {favorite.car.body_style}</li>
                <li style={{ color: 'black' }}>Minimum Amount: {favorite.car.min_amount}</li>
                <li style={{ color: 'black' }}>Year: {favorite.car.year}</li>
              </ul>
            </Card.Body>
            <Card.Footer>
              <button
                type="button"
                style={{ color: 'black' }}
                className="btn btn-danger"
                onClick={() => handleDeleteFavorite(favorite.car.id)}
              >
                Delete
              </button>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default FavoriteList;