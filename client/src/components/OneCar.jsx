import axios from 'axios'
import React, { useState } from 'react'
import CarImages from './CarImages.jsx'
import ChatRoom from './ChatRoom.jsx'
import Payment from './Payment.jsx'
import Bid from "./Bid.jsx"
function OneCar(props) {
 

  return (
    <div>
        <div className='onecar-css'>
            <div className='one-imgdetailes'>
                <div className='car_details'>
            {props.car.images.map((el,i)=><div ><CarImages image={el} key={i}/></div>)}
        <h1>Brand :{props.car.brand_name}</h1>
        <h1>Description:{props.car.description}</h1> 
        <h1>Year: {props.car.year}</h1>
        <h1>Transmition:{props.car.transmission}</h1>
        <h1>Body Style:{props.car.body_style}</h1>
        <h1>Min amount to bid: {props.car.min_amount} dt</h1>
        </div>
        <div className='chatroom-one'>
        <ChatRoom id={props.car.id}/>
        </div>
        </div>
        <div className='paymentOne'>
        <div>
            <Bid car={props.car} />
        </div>
        <div>
            <Payment/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default OneCar