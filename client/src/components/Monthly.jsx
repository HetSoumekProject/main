import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import Dashboard from './AdminDash';
const Monthly=()=> {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
        datasets: [
      {
        label: 'Monthly Auctions',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40,12,8,61,11,9]
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
      <Dashboard/>
      <div className='Monthly'>
      <Bar
          data={data}
          width={2}
          height={1}
          options={{
            maintainAspectRatio: true
          }}
        />
        </div>
    </div>
  );
};
export default Monthly;