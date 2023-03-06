import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';


const Daily=()=> {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [9, 14, 21, 50, 56, 55, 40]
      }
    ]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };



  return (
    <div>
      <h2>Daily Auctions</h2>
      <Bar
          data={data}
          width={2}
          height={1}
          options={{
            maintainAspectRatio: true
          }}
        />
    </div>
  );
};
export default Daily;