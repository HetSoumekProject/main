import React, { useState } from "react";
import axios from "axios";


const Profileimg = () => {
    const [image,setImage] = useState("")
    const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo);
   const uploadimg=()=>{
   const formData = new FormData()
   formData.append("file",image)
   formData.append("upload_preset","t2u9vxn4")
   axios.post("https://api.cloudinary.com/v1_1/dqkhbllak/image/upload",formData)
   .then((res)=>{
    console.log(res.data)
    console.log(res.data.secure_url);
    axios.patch(`http://localhost:3000/api/user/uploadimg/${currentProfile}`,{
        img:res.data.secure_url
    }).then((res)=>{
        console.log(res);
        
    })
    

   })
   .catch((err)=>{
    console.log(err);
   })
   }
    return (
      <div>
        <input 
        className="inp"
        type="file" onChange={(e)=>{setImage(e.target.files[0])}} />
        <button className="upd" onClick={uploadimg} >Upload image</button>
      </div>
    );
  };
  
  export default Profileimg;