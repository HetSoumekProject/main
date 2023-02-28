import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OneCarPending from './OneCarPending.jsx'

function AllPending() {

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
        <h1>AllPending</h1>
        {carsPending.map((el,i)=>{
            <div>
                <OneCarPending setRefreshPending={setRefreshPending} refreshPending={refreshPending} car={el} key={i}/>
            </div>
        })}
    </div>
  )
}

export default AllPending