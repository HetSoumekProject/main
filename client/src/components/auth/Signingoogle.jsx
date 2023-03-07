import React from "react"
import { googleprovider,auth} from '../../firebase'
import {  signInWithPopup } from "firebase/auth";

const Signinwithgoogle = () => {
  
 
  signInWithPopup(auth, googleprovider)
    .then((userInfo) => {
      const user = userInfo.user;
      alert("account created");
      console.log(user);
      console.log(userInfo);
      localStorage.setItem("userInfo",userInfo.user.uid)
        console.log(userInfo);
      return user;
    })
    .catch((error) => {
      console.log(error);
    });
    return (
      <button onClick={()=>Signinwithgoogle()} >sign in with google</button>  )
};



export default Signinwithgoogle