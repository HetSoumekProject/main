import React from "react"
import { googleprovider,auth} from '../../firebase'
import {  signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Signinwithgoogle = () => {
  
 
  signInWithPopup(auth, googleprovider)
    .then((userInfo) => {
      const user = userInfo.user;
      alert("account created");
      console.log(user);
      console.log(userInfo);
      return user;
    }).then((user)=>{
      localStorage.setItem('curentuser','user.uid');
   })
    
    .catch((error) => {
      console.log(error);
    });
    return (
      <button onClick={()=>Signinwithgoogle()} >sign in with google</button>  )
};



export default Signinwithgoogle