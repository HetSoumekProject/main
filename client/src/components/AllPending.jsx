import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OneCarPending from './OneCarPending.jsx'

function AllPending() {

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
        <h1>AllPending</h1>
        {carsPending.map((el,i)=>{
            return(
            <div>
                <OneCarPending  setRefreshPending={setRefreshPending} refreshPending={refreshPending} car={el} key={i}/>
            </div>)
        })}
    </div>
  )
}

export default AllPending