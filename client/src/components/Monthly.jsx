import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Dashboard from './AdminDash';

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
    labels: Array.from({ length: daysInMonth }, (_, i) =>i+1),
    datasets: [],
  };

  cars.forEach((car) => {
    const carDate = new Date(car.createdAt);
    const carMonth = carDate.getMonth();
    const carYear = carDate.getFullYear();

    if (carMonth === today.getMonth() && carYear === today.getFullYear() && !carStats.datasets.find((d) => d.label === car.title)) {
      carStats.datasets.push({
        label: car.title,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Array(daysInMonth).fill(0),
      });
    }

    const carIndex = carStats.datasets.findIndex((d) => d.label === car.title);
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
      <div className="monthly">
        <Bar data={carStats}
         options={options} />
      </div>
    </div>
  );
};

export default Monthly;
