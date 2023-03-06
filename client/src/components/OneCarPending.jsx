import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CarImages from './CarImages.jsx'

function OneCarPending(props) {
    const [seller,setSeller]=useState({})
    // const getTheSeller=(id)=>{
    //     axios.post(`http://localhost:3000/api/car/seller/${id}`).then(res=>setSeller(res.data.first_name+' '+res.data.last_name))
    // }
    // useEffect(()=>{
    //     getTheSeller(props.car.userId)
    // },[])
    const approve=(id)=>{
        axios.put(`http://localhost:3000/api/car/status/approve/${id}`).then(res=>{
        console.log(res)    
        props.setRefreshPending(!props.refreshPending)}).catch(err=>console.log(err))
    }
    const decline=(id)=>{
        axios.put(`http://localhost:3000/api/car/status/decline/${id}`).then(res=>props.setRefreshPending(!props.refreshPending)).catch(err=>console.log(err))
    }
  return (
    <div>
        <div>
        {/* <h1>{seller}</h1> */}
        {props.car.images.map((el,i)=><div ><CarImages image={el} key={i}/></div>)}
        <h1>{props.car.brand_name}</h1>
        <h1>{props.car.description}</h1> 
        <h1>{props.car.initial_price}</h1>
        <h1>{props.car.year}</h1>
        <h1>{props.car.transmission}</h1>
        <h1>{props.car.body_style}</h1>
        <h1>{props.car.min_amount}</h1>
        </div>
    <div className='but'>
        <button className='bouton' type='button' onClick={()=>{
            approve(props.car.id)
        }}>Approve</button>
        <button className='bouton' type='button' onClick={()=>{
            decline(props.car.id)
        }}>Decline</button>
    </div>
    </div>
  )
}

export default OneCarPending