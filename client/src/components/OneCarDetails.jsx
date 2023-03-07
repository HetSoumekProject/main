
import React from 'react'
import CarImages from './CarImages.jsx'
function OneCarDetails(props) {
    
  return (
    <div>
        <div>
      
        {props.car.images.map((el,i)=><div ><CarImages image={el} key={i}/></div>)}
        <h1 style={{color:"black"}}>{props.car.brand_name}</h1>
        <h1 style={{color:"black"}}>{props.car.description}</h1>
        <h1 style={{color:"black"}}>{props.car.initial_price}</h1>
        <h1 style={{color:"black"}}>{props.car.year}</h1>
        <h1 style={{color:"black"}}>{props.car.transmission}</h1>
        <h1 style={{color:"black"}}>{props.car.body_style}</h1>
        <h1 style={{color:"black"}}>{props.car.min_amount}</h1>
        </div>
   
    </div>
  )
}
export default OneCarDetails;