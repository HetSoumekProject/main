import React, { useEffect, useState } from "react";
import axios from "axios";
import Profileimg from "../profile/Profileimg.jsx"
import Updateinfo from "../profile/Updateinfo.jsx"
import Itemsdetails from "../profile/Itemsdetails.jsx"
// import Notify from "../Notify.jsx";
const Profile = () => {
  const [view , setView]=useState(false)

    const [data, setData] = useState({});
    const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo);
    const [refresh,setRefresh]=useState(null)
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
    }, []);

   

    return (
      <div>
  
       {/* <Notify/> */}
     
        <img src={data.img} alt="You" />
         <h1 style={{backgroundColor:"red"}}> {data.email}  </h1>
         <h1 style={{backgroundColor:"green"}}> {data.first_name}</h1>
         <h1 style={{backgroundColor:"green"}}> {data.last_name}</h1>
         <h1 style={{backgroundColor:"green"}}> {data.phone_number}</h1>
         <Profileimg />
         <Updateinfo />
         <Itemsdetails  />
                
        
      </div>
    );
  };
  
  export default Profile;