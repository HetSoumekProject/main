import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Dashboard from './AdminDash';

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
    labels: ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [],
  };

  cars.forEach((car) => {
    const carDate = new Date(car.createdAt).toLocaleDateString('en-EN', option);

    if (!carStats.datasets.find((d) => d.label === car.title)) {
      carStats.datasets.push({
        label: car.title,
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Array(7).fill(0),
      });
    }

    const carIndex = carStats.datasets.findIndex((d) => d.label === car.title);
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
      <div className="daily">
        <Bar data={carStats}
         options={options} />
      </div>
    </div>
  );
};

export default Daily;
