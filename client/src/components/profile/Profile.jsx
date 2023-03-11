import React, { useEffect, useState } from "react";
import axios from "axios";
import Profileimg from "../profile/Profileimg.jsx"
import Itemsdetails from "../profile/Itemsdetails.jsx"
import "./profile.css"
import Updateinfo from "../profile/Updateinfo.jsx"
const Profile = () => {
    const [data, setData] = useState({});
    const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo);
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(() => {
        axios
          .get(`http://localhost:3000/api/user/userbyuid/${currentProfile}`)
          .then((res) => {
            setData(res.data);
          })
          .catch((error) => {
            throw error;
          });
      }, []);

    const toggleUpdate = () => {
        setShowUpdate(!showUpdate);
    }

    return (
        <div className="container1">
            <div className="profile">
                <img className="profile-image" src={data.img} alt="You" />
                <div className="profile-details">
                    <h1 className="profile-email">Email: {data.email}</h1>
                    <h1 className="profile-name">First name: {data.first_name}</h1>
                    <h1 className="profile-last">last name: {data.last_name}</h1>
                    <h1 className="profile-number">Phone number: {data.phone_number}</h1>
                </div>
                <button className="editbutton" onClick={toggleUpdate}>Update Info</button>
                {showUpdate && <Updateinfo />}
                {/* <Profileimg /> */}
                <Itemsdetails props={data} />
            </div>
        </div>
    );
};

export default Profile;
