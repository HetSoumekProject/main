import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FavoriteList({user,refresh,x,props,car}) {
  
    const [favorites, setFavorites] =useState([]);
    console.log("========================>",x);
    useEffect(() => {
              axios.get(`http://localhost:3000/api/fav/checkfav/${x}`)
        .then(response => {
          console.log(response.data,"check fav");
          setFavorites(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, [refresh]);
  
    return (
     
      
      <div>
       
      <table class="table">
       <thead>
        <tr>
            <th style={{color:"white"}}>brand_name</th>
            <th style={{color:"white"}}>description</th>
            <th style={{color:"white"}}>initial_price</th>
            <th style={{color:"white"}}>transmission</th>
            <th style={{color:"white"}}>body_style</th>

            <th style={{color:"white"}} >min_amount</th>
            <th style={{color:"white"}} >year</th>
            <th style={{color:"white"}} >delete</th>
            
        </tr>
    </thead>
    {favorites.map(favorite => (
       
    <tbody>
    
        <tr> 
        <td style={{color:"white"}} >{favorite.car.brand_name
}</td>
            <td style={{color:"white"}}>{favorite.car.description
}</td>
            <td style={{color:"white"}}>{favorite.car.initial_price}</td>
            <td style={{color:"white"}}>{favorite.car.transmission}</td>
            <td style={{color:"white"}}>{favorite.car.body_style}</td>
            <td style={{color:"white"}}>{favorite.car.min_amount}</td>
            <td style={{color:"white"}}>{favorite.car.year}</td>
            <td >
                
                <button 
                
                type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon"
               onClick=
               {()=>axios.delete(`http://localhost:3000/api/fav/deletefav/${x}/${favorite.car.id}`)
              
               (window.location.reload())
               .then(function (result){console.log(result)}) 
               .catch(function(error){console.log(error)})
               } >
                   
                </button>
            </td>
           
        
        </tr>
       
    </tbody>
   
     ))}
</table>
    
    </div>
   
    );
  }

export default FavoriteList;
//  <ul>
//         {favorites.map(favorite => (
//           <li key={favorite.id}>
//             Car: 
//             <br/>
//             style:{favorite.car.body_style}<br/>
//             brand_name:   {favorite.car.brand_name
// }<br/>
// description:    {favorite.car.description
// }<br/>
// starting_day:   {favorite.car.starting_day
// }<br/>
// ending_day: {favorite.car.ending_day}<br/>
// initial_price:         {favorite.car.initial_price}<br/>
// transmission:     {favorite.car.transmission}<br/>
// year:    {favorite.car.year}<br/>
            
//           </li>
//         ))}
//       </ul> 