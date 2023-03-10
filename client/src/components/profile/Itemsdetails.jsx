import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
    
    <div> {console.log(data)}   
            {data.map((val,key) => {
            return  <div key={key} >
               
               <h1>{val.brand_name}</h1>
                <p>{val.status}  </p>
                <div>
                  {val.images.map((imagee)=>
                  
                {
                  {console.log('this',imagee)}
                  return <img className='profimg' src={imagee.image} alt="car" />
                }
                  
                  )}
                  
                </div>
              </div>
            })}
          </div>
         )
}

export default Itemsdetails