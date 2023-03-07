import axios from 'axios'
import React, { useState } from 'react'
import CarImages from './CarImages.jsx'
import ChatRoom from './ChatRoom.jsx'
import Payment from './Payment.jsx'
import Bid from "./Bid.jsx"
function OneCar(props) {
    

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
            <Bid car={props.car} />
        </div>
        <div>
            <Payment/>
        </div>
        </div>
    </div>
  )
}

export default OneCar