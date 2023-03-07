import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Customers = (props) => {

  console.log("this",props.users);
   return (
    <div>
      <table class="table">
       <thead>
        <tr>
            <th class="text-center">#</th>
            <th>first name</th>
            <th>last name</th>
            <th>phone number</th>
            <th>email</th>

            <th class="text-right">DELETE</th>
        </tr>
    </thead>
   
     {props.users.map((user, index) => (
      
    <tbody>
        <tr>
            <td class="text-center">{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.phone_number}</td>
            <td>{user.email}</td>

            <td class="td-actions text-right">
                
                <button type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon"
               onClick=
               {()=>axios.delete(`http://localhost:3000/api/user/deleteOneUser/${user.id}`)
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
export default Customers;
