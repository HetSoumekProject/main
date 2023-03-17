import React, { useEffect, useState } from "react";
import axios from "axios";
import Profileimg from "../profile/Profileimg.jsx"
import Itemsdetails from "../profile/Itemsdetails.jsx"
import "./profile.css"
import Updateinfo from "../profile/Updateinfo.jsx"
import { MdMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa';
const Profile = () => {
  const [view , setView]=useState(false)

    const [data, setData] = useState({});
    const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo);
    const [showUpdate, setShowUpdate] = useState(false);
    const[refresh,setRefresh] = useState(null)
    useEffect(() => {
        axios
          .get(`http://localhost:3000/api/user/userbyuid/${currentProfile}`)
          .then((res) => {
            setData(res.data);
            setRefresh('')
          })
          .catch((error) => {
            throw error;
          });
      }, []);

    const toggleUpdate = () => {
        setShowUpdate(!showUpdate);
    }

    return (
        
            <div className="page" >
              <div className="bigone" >
              <div class="mari">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
          </div>
                <img className="bgimg" src="https://wallpaperaccess.com/full/123993.jpg" />
              
               
                <div className="profpos" >
                <img className="profile-image" src={data.img} alt="You" />
                </div>
                <div className="uploadimg" >
                <Profileimg />
                </div>
                 <div className="profile-details">
                
        
                    <h1 className="profile-email"><MdMail size={25}/> {data.email}</h1>
                    <h1 className="profile-name"><FaUser size={25}/> {data.first_name} {data.last_name}</h1>
                    <h1 className="profile-number"><FaPhone size={25}/> {data.phone_number}</h1>           
                    <button className="editbutton" onClick={toggleUpdate}>Update Info</button>
                    {showUpdate && <Updateinfo />}
                    <div className="static" >"This is your space, Here you can customize your profile and stay updated on your cars"</div>
                    </div>
                    
                 </div>
                <div className="posts">
                <Itemsdetails props={data} refresh={refresh}/>
                </div>


            </div>
        
    );
};

export default Profile;
