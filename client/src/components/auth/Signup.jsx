import { createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import axios from 'axios'
import "./signup.css"
import Signin from "../auth/Signin.jsx"
import { Link } from 'react-router-dom'
const Signup = ()=>{
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstname,setFirstname]= useState("")
    const [lastname,setLastname]= useState("")
    const [phonenumber,setPhonenumber]= useState("")
    const submitup =(e)=>{
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
          }
     e.preventDefault()
     createUserWithEmailAndPassword(auth,email,password)
     .then((userInfo)=>{
        const user = userInfo.user;
                   alert("account created");
               console.log(user)
               console.log(userInfo);
               return user
     })
     .then((user)=>{
        console.log(user.uid,'uid');
        axios.post('http://localhost:3000/api/user/AddUser',{
            email:user.email,
            
            first_name:firstname,
            last_name:lastname,
            phone_number:phonenumber,
            firebase_id:user.uid
        })
     })

     .catch((error)=>{
        console.log(error);
     })
    }
    return (
        <div className='form-container' >
        <div className='form-box' >
            
                <h1 className='Signup' >Sign up</h1>
                <input type="text" className='signupinputs' placeholder="enter first name" value={firstname} 
                onChange={(e)=> setFirstname(e.target.value) }  ></input>
                <input type="text" className='signupinputs' placeholder="enter last name" value={lastname} 
                onChange={(e)=> setLastname(e.target.value) }  ></input>
                <input type="email" className='signupinputs' placeholder="enter email" value={email} 
                onChange={(e)=> setEmail(e.target.value) }  ></input>
                <input type="password" className='signupinputs' placeholder="enter password" value={password} 
                onChange={(e)=> setPassword(e.target.value) } ></input>
                <input type="password" className='signupinputs' placeholder="confirm password" value={confirmPassword} 
                onChange={(e)=> setConfirmPassword(e.target.value) } ></input>
                <input type="number" className='signupinputs' placeholder="phone number" value={phonenumber} 
                onChange={(e)=> setPhonenumber(e.target.value) } ></input>
                <button className='signupbutton' onClick={submitup}   >submit</button>
                
                <p> Already a user ? <Link to="/Signin"  >   Sign in </Link> </p>
                
                
                
                
            
        </div>
        </div>
    )
}

export default Signup 