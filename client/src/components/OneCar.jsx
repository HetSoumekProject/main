import axios from 'axios'
import React, { useState } from 'react'
import CarImages from './CarImages.jsx'
import ChatRoom from './ChatRoom.jsx'
import Payment from './Payment.jsx'
import Bid from "./Bid.jsx"
import './oneCar.css'
function OneCar(props) {

  return (
    <div className='bodey'>
        <div className=''>
            <div className=''>
                <div className="">
                <div className='block'>
  {props.car.images.length> 0 && (
    <div className="preload-wrap main loaded">
      <CarImages image={props.car.images[0]} />
    </div>
  )}
  {props.car.images.slice(1).map((el, i) => (
    <div className={`car-image car-image-${i+1}`} key={i}>
      <CarImages image={el} />
    </div>
  ))}
</div>

            <div className='description'>
         <h1>Brand :{props.car.brand_name}</h1>
       
        <h2>Year: {props.car.year}</h2>
        <h3>Transmition:{props.car.transmission}</h3>
        <h4>Body Style:{props.car.body_style}</h4>
         <p>Description:{props.car.description}</p> 
        <h1>Min amount to bid: {props.car.min_amount} dt</h1></div>
       
        </div>
        <div className=''>
        <ChatRoom id={props.car.id}/>
        </div>
        </div>
        <div className=''>
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