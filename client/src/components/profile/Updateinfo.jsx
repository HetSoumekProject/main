import React from "react";
import { useState } from "react";
import axios from "axios";


const Updateinfo= ( ) => {
  
    const [first_name1,setFirst_name1]=useState('')
    const [last_name1,setLast_name1]=useState('')
    const [phone_number1,setPhone_number1]=useState('')
    const [currentProfile, setCurrentProfile] = useState(localStorage.userInfo)
    const handleupdate=()=>{
     axios.patch(`http://localhost:3000/api/user/updateuserprofile/${currentProfile}`,{
        first_name:first_name1, 
        last_name:last_name1, 
        phone_number:phone_number1,
       
        }) 
        (window.location.reload())
        .then(res => res.data)
        .catch(error=>{
            console.log(error);
        })
    }
        

    return (
      <div>
             
             <input 
             className="inputs"
             placeholder="New First name"
             onChange={(e)=>setFirst_name1(e.target.value)}
             value={first_name1}
             />
             <input 
             className="inputs"

             placeholder="New Last name"
             onChange={(e)=>setLast_name1(e.target.value)}
             value={last_name1}
             />
             <input 
             className="inputs"
             placeholder="New Phone number"
             onChange={(e)=>setPhone_number1(e.target.value)}
             value={phone_number1}
             />  
             <button className="editbutton" onClick={()=>handleupdate()} >Confirm</button>
      </div>
    );
  };
  
  export default Updateinfo