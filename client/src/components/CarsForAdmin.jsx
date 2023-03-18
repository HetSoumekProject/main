import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import Dashboard from './AdminDash';

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
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
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
      <div className="daily">
        <Bar data={carStatsData} options={options} />
      </div>
    </div>
  );
};

export default CarsForAdmin;
