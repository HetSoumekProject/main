import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Itemsdetails({props}) {
  const [data, setData] = useState([]);
  
  console.log(props.id);
  
  useEffect(() => {
    
    axios
      .get(`http://localhost:3000/api/car/carsofuser/${1}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);


  return (
    
    <div> {console.log(data)}   
            {data.map((val,key) => {
            return  <div key={key} >
               
               <h1>{val.brand_name}</h1>
                <p>{val.status}  </p>
              </div>
            })}
          </div>
         )
}

export default Itemsdetails