import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Dashboard from './AdminDash';
import { Container, Row, Col } from 'react-bootstrap';
const CarsForAdmin = () => {
  const [cars, setCars] = useState([]);
  const option = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const today = new Date().toLocaleDateString('en-EN', option);
  useEffect(() => {
    axios.get('http://localhost:3000/api/car/AllCars')
      .then(res => {
        console.log('data', res.data);
        setCars(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const carStatsByBrand = {};
  cars.forEach((car) => {
    const carDate = new Date(car.createdAt).toLocaleDateString('en-EN', option);
    const dayIndex = new Date(carDate).getDay();
    const brand = car.brand_name;
    if (!carStatsByBrand[brand]) {
      carStatsByBrand[brand] = Array(7).fill(0);
    }
    carStatsByBrand[brand][dayIndex]++;
  });
  const carStatsData = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [],
  };
  Object.keys(carStatsByBrand).forEach((brand) => {
    const brandStats = {
      label: brand,
      backgroundColor: `rgba(0, 0, 0, 0)`,
        borderColor: `grey`,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 5,
        pointHitRadius: 15,
        pointBackgroundColor: 'white',
        pointBorderColor: `rgba(0, 0, 0, 0)`,
        pointHoverBackgroundColor: `black`,
        pointHoverBorderColor: `rgba(0, 0, 0, 0)`,
      data: carStatsByBrand[brand],
    };
    carStatsData.datasets.push(brandStats);
  });
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Dashboard />
      <h1 className="mt-3" fluid style={{marginLeft: 660,color:'white'}}>Cars type</h1>
      <Container fluid style={{marginTop: 0,marginLeft: 80,width:1390}
    }>
      <Row className="justify-content-md-center">
        <Col lg={10}>
          <Line data={carStatsData} options={options} />
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default CarsForAdmin;