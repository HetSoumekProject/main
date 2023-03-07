import axios from 'axios'
import React, { useEffect, useState } from 'react'

import OneCarDetails from './OneCarDetails.jsx';


function OneCarPending(props) {
    const [seller,setSeller]=useState({})
    const [view , setView]=useState(false)
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
      <table class="table">
       <thead>
        <tr>
            <th style={{color:"white"}}>brand_name</th>
            <th style={{color:"white"}}>description</th>
            <th style={{color:"white"}}>initial_price</th>
            <th style={{color:"white"}}>transmission</th>
            <th style={{color:"white"}}>body_style</th>

            <th style={{color:"white"}} >min_amount</th>
            <th style={{color:"white"}} >year</th>
            <th style={{color:"white"}} >pictures</th>
            <th style={{color:"white"}} >Actions</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style={{color:"white"}} ><br/>{props.car.brand_name}</td>
            <td style={{color:"white"}}><br/>{props.car.description}</td>
            <td style={{color:"white"}}><br/>{props.car.initial_price}</td>
            <td style={{color:"white"}}><br/>{props.car.transmission}</td>
            <td style={{color:"white"}}><br/>{props.car.body_style}</td>
            <td style={{color:"white"}}><br/>{props.car.min_amount}</td>
            <td style={{color:"white"}}><br/>{props.car.year}</td>
            <td>
            
            <button 
                style={{color:"white"}}
                type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon"
                onClick={()=>{
                   setView(!view)
                }} >
                   show
                </button>
         </td>
            <td class="td-actions">
                
                <button style={{color:"white"}}
                
                type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon"
                onClick={()=>{
                    approve(props.car.id)
                }} >approve
                   
                </button>
                <button style={{color:"white"}}
                
                type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon"
                onClick={()=>{
                    decline(props.car.id)
                }}>
                   decline
                </button>
                {view &&<div>
                    <OneCarDetails data={props}/>
                </div>}
            </td>
       
        </tr>
       
    </tbody>
    
</table>
    
    </div>
  )
}

export default OneCarPending