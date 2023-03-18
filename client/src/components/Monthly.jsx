import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Dashboard from './AdminDash';
import { Container, Row, Col } from 'react-bootstrap';
const Monthly = () => {
  const [cars, setCars] = useState([]);
  const option = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const today = new Date();
  useEffect(() => {
    axios.get('http://localhost:3000/api/car/AllCars')
      .then(res => {
        console.log('data', res.data);
        setCars(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const month = Array(daysInMonth).fill(0);
  for (let i = 0; i < cars.length; i++) {
    const createdAtt = new Date(cars[i].createdAt);
    if (createdAtt.getMonth() === today.getMonth() && createdAtt.getFullYear() === today.getFullYear()) {
      month[createdAtt.getDate() - 1]++;
    }
  }
  const carStats = {
    labels: Array.from({ length: daysInMonth }, (_, i) => i + 1),
    datasets: [],
  };
  cars.forEach((car) => {
    const carDate = new Date(car.createdAt);
    const carMonth = carDate.getMonth();
    const carYear = carDate.getFullYear();
    const carDatee = new Date(car.createdAt).toLocaleDateString('en-EN', option);
    if (carMonth === today.getMonth() && carYear === today.getFullYear() && !carStats.datasets.find((d) => d.label === carDatee)) {
      carStats.datasets.push({
        label: carDatee,
        backgroundColor: `rgba(0, 0, 0, 0)`,
        borderColor: `grey`,
        borderWidth: 3,
        pointRadius: 4,
        pointHoverRadius: 5,
        pointHitRadius: 15,
        pointBackgroundColor: 'white',
        pointBorderColor: `rgba(0, 0, 0, 0)`,
        pointHoverBackgroundColor: `grey`,
        pointHoverBorderColor: `rgba(0, 0, 0, 0)`,
        data: Array(daysInMonth).fill(0),
      });
    }
    const carIndex = carStats.datasets.findIndex((d) => d.label === carDatee);
    if (carMonth === today.getMonth() && carYear === today.getFullYear()) {
      carStats.datasets[carIndex].data[carDate.getDate() - 1]++;
    }
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
      <h1 className="mt-3" fluid style={{marginLeft: 660,color:'white'}}>Monthly Car Sales</h1>
      <Container fluid style={{marginTop: 0,marginLeft: 80,width:1390}
    }>
      <Row className="justify-content-md-center">
        <Col lg={10}>
          <Line data={carStats} options={options} />
        </Col>
      </Row>
    </Container>
    </div>
  );
};
export default Monthly;












