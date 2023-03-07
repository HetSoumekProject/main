import axios from 'axios'
import React, { useState } from 'react'
import CarImages from './CarImages'
import ChatRoom from './ChatRoom'
import Payment from './Payment'

function OneCar(props) {
const [amount,setAmount]=useState(0)
 const placeAbid=(amount,carId,userId)=>{
    axios.post("http://localhost:3000/bid/placeabid",{
        amount:amount,carId:carId,userId:userId
    }).then(res=>console.log(res)).catch(err=>console.log(err))
 }

  return (
    <div>
        <div>
            <div>
            {props.car.images.map((el,i)=><div ><CarImages image={el} key={i}/></div>)}
            </div>
            <div>
        <h1>{props.car.brand_name}</h1>
        <h1>{props.car.description}</h1> 
        <h1>{props.car.initial_price}</h1>
        <h1>{props.car.year}</h1>
        <h1>{props.car.transmission}</h1>
        <h1>{props.car.body_style}</h1>
        <h1>{props.car.min_amount}</h1>
        </div>
        <div>
        <ChatRoom/>
        </div>
        <div>
            place a bid
            <input type="number" min="200" step="200" placeholder='amount' onChange={(e)=>setAmount(e.target.value)}/>
            <button type='button' onClick={()=>{
                placeAbid(amount,props.car.id,props.user.id)
            }}> Bid</button>
            <Payment/>
        </div>
        </div>
    </div>
  )
}

export default OneCar