import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./posts.css"
function Itemsdetails({props,refresh}) {
  const [data, setData] = useState([]);
  
  console.log(props.id);
  
  useEffect(() => {
    
    axios
      .get(`http://localhost:3000/api/car/getAllCarsforuser/${props.id}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [refresh]);


  return (
    
    <div className='itemcard' >   
            {data.map((val,key) => {
            return  <div class="product-card">
		<div class="badge">{val.status} </div>
		<div class="product-tumb">
			<img  src={val.images[0].image}   />
		</div>
		<div class="product-details">
			<span class="product-catagory">{val.brand_name}</span>
			<h4><a href="">{val.brand_name}</a></h4>
			<p>{val.description}<br/>
      </p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$Initial Price</small>TND{val.initial_price}</div>
				<div class="product-links">
				
				</div>
			</div>
		</div>
	</div>
            })}
          </div>
         )
}

export default Itemsdetails