import React,{useState,useEffect} from 'react'
import io from 'socket.io-client';
const socket = io('http://localhost:3000');


const Notify = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
      socket.on('notification', (data) => {
        setNotifications((notifications) => [...notifications, data]);
      });
    }, []);
  
    const handleBid = () => {
      const data = {
        username: 'john',
        carName: 'ferrari'
      };
      socket.emit('bid', data);
    };
  
    return (
      <div >
        <h1>Hiiii</h1>
        <button onClick={handleBid}>Bid on Car</button>
        {notifications.map((notification, index) => (
          <div key={index}>{notification}</div>
           
        ))}
        
      </div>
    );
  }

export default Notify
