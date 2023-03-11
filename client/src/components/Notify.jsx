import React ,{useEffect,useState,useCallback}from 'react'
import axios from 'axios';
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");
const Notify = () => {
    const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo);
    const [data ,setData]=useState({})
    const [refresh,setRefresh]=useState(null)
    const [notifications,setnotifications]=useState([])
    useEffect(() => {
        console.log(currentProfile);
      axios
        .get(`http://localhost:3000/api/user/userbyuid/${currentProfile}`)
        .then((res) => {
          setData(res.data);
          console.log(res.data)
          setRefresh('')
        })
        .catch((error) => {
          throw error;
        });
    }, [refresh]);
    const newNotification=useCallback(
      (note) => {
        console.log("this is a notification client",note)
        setnotifications((prev)=>{
          return [...prev,note]
        })
      },[]
    )
useEffect(()=>{
  axios.get(`http://localhost:3000/api/notifications/AllNotifications/${data.id}`)
  .then((res) => {
    setnotifications(res.data);
    console.log('notiff',res.data)
    setRefresh('')
  })
  .catch((error) => {
    throw error;
  }); 
  socket.on(`notification/${data.id}`, newNotification);
  return () => {
    socket.off(`notification/${data.id}`, newNotification);
  };
},[refresh])
 
  return (
    <div>
      {notifications.map((notification, index) => (
    

      <p >{notification.bidder_name} bid on {notification.brand_name
      } with {notification.added_bid
      }</p> 


      )

      )}
    </div>
  )
}

export default Notify
