import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import Handlesignout from "./Handlesignout"
import axios from 'axios'

const Signin = ()=>{
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    
    const submit =(e)=>{
     e.preventDefault()
     signInWithEmailAndPassword(auth,email,password)
     .then((userInfo)=>{

        localStorage.setItem("userInfo",userInfo.user.uid)
        console.log(userInfo);
        

        axios.get(`http://localhost:3000/api/user/userbyuid/${userInfo.user.uid}`)
        .then((res)=>{
            console.log(res);
           
        }).catch((err)=>{
            console.log(err);
        })


     })
     
     .catch((error)=>{
        console.log(error);
     })
     
    }
    return (
        
        <div className='form-container' >
             <div className='form-box' >
                <h1 className='Signup' >log in</h1>
                <input className='signupinputs' type="email" placeholder="enter email" value={email} 
                onChange={(e)=> setEmail(e.target.value) }  ></input>
                <input className='signupinputs' type="password" placeholder="enter password" value={password} 
                onChange={(e)=> setPassword(e.target.value) } ></input>
                <button className='signupbutton' onClick={submit}  type='submit' >submit</button>
                <Handlesignout />
                
        </div>
        </div>
    )
}

export default Signin  