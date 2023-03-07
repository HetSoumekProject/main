import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [data, setData] = useState("");
    const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo);
  
    useEffect(() => {
      axios
        .get(`http://localhost:3000/api/user/userbyuid/${currentProfile}`)
        .then((res) => {
          setData(res.data);
          console.log(data);
        })
        .catch((error) => {
          throw error;
        });
    }, []);
  
    return (
      <div>
        
      </div>
    );
  };
  
  export default Profile;