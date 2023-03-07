
import React from 'react'
import CarImages from './CarImages.jsx'

function OneCarDetails(props) {
    console.log("this",props);
   
    
  return (
    <div>
        <div>
        
        {props.data.car.images.map((el,i)=><div ><CarImages image={el} key={i}/></div>)}
        
       
        </div>
   
    </div>
  )
}
export default OneCarDetails;