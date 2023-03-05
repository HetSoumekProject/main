import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import OneCarPending from './OneCarPending.jsx'

const AllPending=()=> {
    const [carsPending,setPending]=useState([])
    const [refreshPending,setRefreshPending]=useState(true)
    const getALLPendingCars=()=>{
        axios.get("/api/car/allPending").then(res=>setPending(res.data)).catch(err=>console.log(err));
    }
    useEffect(()=>{
        getALLPendingCars()
    },[refreshPending])
 



  return (
    <div>
      <h2>Auction Data</h2>
     
    </div>
  );
};
export default AllPending