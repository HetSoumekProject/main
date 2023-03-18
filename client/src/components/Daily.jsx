import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Dashboard from './AdminDash';
import { Container, Row, Col } from 'react-bootstrap';
const Daily = () => {
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
  const week = Array(7).fill(0);
  for (let i = 0; i < cars.length; i++) {
    console.log(i,'iiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    const createdAtt = cars[i].createdAt.split('T')[0];
    console.log(createdAtt,"createdAtt");
    if (createdAtt === today) {
      const dayIndex = new Date(createdAtt).getDay();
      week[dayIndex]++;
     console.log(week,'weeeeeeeeeeeeeeeeeeeeeeeeeeeeeek');
    }
  }
  const carStats = {
     labels : ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [],
  };
  cars.forEach((car) => {
    const carDate = new Date(car.createdAt).toLocaleDateString('en-EN', option);
    if (!carStats.datasets.find((d) => d.label === carDate)) {
      carStats.datasets.push({
        label: carDate,
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
        data: Array(7).fill(0),
      });
    }
    const carIndex = carStats.datasets.findIndex((d) => d.label === carDate);
    const dayIndex = new Date(carDate).getDay();
    carStats.datasets[carIndex].data[dayIndex]++;
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
      <h1 className="mt-3" fluid style={{marginLeft: 660,color:'white'}}>Daily Car Sales</h1>
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
export default Daily;