import axios from 'axios'
import React, { useState } from 'react'
import CarImages from './CarImages.jsx'
import ChatRoom from './ChatRoom.jsx'
import Payment from './Payment.jsx'
import Bid from "./Bid.jsx"
import './oneCar.css'
import TheMap from './TheMap.jsx'
function OneCar(props) {

  return (
    
    
    <div className='bodey'>
      
         <div className='chatdiv'>
        <ChatRoom id={props.car.id}/>
        </div>
                <div className='block'>
  {props.car.images.map((el, i) => (
    <div className={`car-image car-image-${i}`} key={i}>
      <CarImages image={el} />
 

    </div>
  ))}
 
</div>
       <div class="table-container">
  <table class="responsive-table">
    <thead>
      <tr class="table-header">
        <th class="col col-1">Brand</th>
        <th class="col col-2">Year</th>
        <th class="col col-3">Transmission</th>
        <th class="col col-4">Body Style</th>
        <th class="col col-5">Description</th>
        <th class="col col-6">Min. Amount to Bid</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td class="col col-1" data-label="Brand">{props.car.brand_name}</td>
        <td class="col col-2" data-label="Year">{props.car.year}</td>
        <td class="col col-3" data-label="Transmission">{props.car.transmission}</td>
        <td class="col col-4" data-label="Body Style">{props.car.body_style}</td>
        <td class="col col-5" data-label="Description">{props.car.description}</td>
        <td class="col col-6" data-label="Min. Amount to Bid">{props.car.min_amount}</td>
      </tr>
    </tbody>
  </table>
  <Bid car={props.car} />
  <Payment/>
  <TheMap car={props.car}/>
</div>
        
            
      
        </div>
  
  )
}

export default OneCar