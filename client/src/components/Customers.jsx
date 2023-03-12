import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Customers = (props) => {
    const [notifications, setNotifications] = useState([]);
    // useEffect(() => {
    //     socket.on("new_notification", (data) => {
    //       console.log("Received notification:", data);
    //       setNotifications((prevNotifications) => [...prevNotifications, data]);
    //     });
    
    //     axios
    //       .get("http://localhost:3000/api/notifications")
    //       .then((response) => {
    //         console.log("Notifications:", response.data);
    //         setNotifications(response.data);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }, []);

  console.log("this",props.users);
   return (
    <div >
          
      {/* <ul className='notification'>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message} ({notification.timestamp})
          </li>
        ))}
     </ul> */}
      <table class="table">
       <thead>
        <tr>
            <th style={{color:"white"}} class="text-center">#</th>
            <th style={{color:"white"}}>first name</th>
            <th style={{color:"white"}}>last name</th>
            <th style={{color:"white"}}>phone number</th>
            <th style={{color:"white"}}>email</th>

            <th style={{color:"white"}} class="text-right">DELETE</th>
        </tr>
    </thead>
   
     {props.users.map((user, index) => (
      
    <tbody>
        <tr>
            <td style={{color:"white"}} class="text-center">{user.id}</td>
            <td style={{color:"white"}}>{user.first_name}</td>
            <td style={{color:"white"}}>{user.last_name}</td>
            <td style={{color:"white"}}>{user.phone_number}</td>
            <td style={{color:"white"}}>{user.email}</td>

            <td class="td-actions text-right">
                
                <button 
                
                type="button" rel="tooltip" class="btn btn-danger btn-sm btn-icon"
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
