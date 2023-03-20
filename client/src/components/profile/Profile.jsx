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
              {/* <div class="mari">
               <a href="#" class="fab fa-facebook-f"></a>
               <a href="#" class="fab fa-twitter"></a>
               <a href="#" class="fab fa-instagram"></a>
               <a href="#" class="fab fa-linkedin"></a>
               </div>
              <div className="bigone" >
              
                <div className="cover" >
                  <img src="https://wallpaperaccess.com/full/123993.jpg " />
                 </div>
              
               
                <div className="profpos" >
                <img className="profile-image" src={data.img} alt="You" />
                </div>
                <div className="uploadimg" >
                <Profileimg />
                </div>
                 <div className="profile-details">
                 
        
                    
                    <h1 className="profile-name"></h1>
                    <h1 className="profile-number"><FaPhone size={25}/>  {data.phone_number}</h1> 
                    <h1 className="profile-email"></h1>          
                    <button className="editbutton" onClick={toggleUpdate}>Update Info</button>
                    {showUpdate && <Updateinfo />}
                    <div className="static" >"This is your space, Here you can customize your profile and stay up to date on your cars"</div>
                    </div>
                    
                 </div>
                 <div className="postscontainer" >
                <div className="posts">
                <Itemsdetails props={data} refresh={refresh}/>
                </div>
                </div> */}
	<span class="back">
		<i class="fas fa-long-arrow-alt-left"></i>
		back
	</span>

	<section class="profile_container">
		<div class="profile_img_section">
			<img class="profile_img-LG" src={data.img} />
			<div class="flag_wrapper">
				<img class="flag" src="https://png.pngtree.com/element_origin_min_pic/16/09/12/1757d670c8f366c.jpg" alt="South Korean Flag" />
			</div>
      <div className="uploadimg" >
                <Profileimg />
                </div>
		</div>

		<div class="profile_desc_section">
			<h2>{data.first_name} {data.last_name}</h2>
			<h3>HET SOUMEK</h3>
			<p class="description">"This is your space, Here you can customize your profile and stay up to date on your cars".</p>

			<div class="interests">
				
      <button className="interests_item" onClick={toggleUpdate}>Update Info</button>
      {showUpdate && <Updateinfo />}
			</div>
		</div>

	</section>

	<div class="info">
		<ul>
			<li>
			<FaUser size={20}/>  {data.first_name} {data.last_name}
			</li>
			<li>
      <FaPhone size={20}/>  {data.phone_number}
			</li>
			<li>
      <MdMail size={25}/>  {data.email}
			</li>
		</ul>
	</div>
 <div className="posts">
                <Itemsdetails props={data} refresh={refresh}/>
                </div>
            </div>
        
    );
};

export default Profile;
