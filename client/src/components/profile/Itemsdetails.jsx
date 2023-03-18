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
            return  <div className='itemdetails' key={key} >
               
               <h1>{val.brand_name}</h1>
                <p>{val.status}  </p>
                <div className='itemimg' >
                  {/* {val.images.map((imagee)=>
                  
                {
                  
                  return <img className='itemimg' src={imagee.image} alt="car" />
                }
                  
                  )} */}
                  <img className="car-img-profile" src={val.images[0].image} alt="car" />
                </div>
              </div>
            })}
          </div>
         )
}

export default Itemsdetails