import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import OneCarPending from './OneCarPending.jsx'

const AllPending=()=> {
    const [carsPending,setPending]=useState([])
    const [refreshPending,setRefreshPending]=useState(true)
    const getALLPendingCars=()=>{
      axios.get("http://localhost:3000/api/car/allPending").then(res=>{ 
        setPending(res.data)
        console.log(carsPending)}).catch(err=>console.log(err));
    }

    useEffect(()=>{
      getALLPendingCars()
  },[])

  return (
    <div>
       
        {carsPending.map((el,i)=>{
            return(
            <div>
                 <OneCarPending  setRefreshPending={setRefreshPending} refreshPending={refreshPending} car={el} key={i}/>
            </div>)
        })}
    </div>
  )
  
};
export default AllPending