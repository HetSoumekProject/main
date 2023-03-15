import React from 'react'
import { signOut} from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'
const Handlesignout= (props)=>{
    const usersignout = () =>{
        signOut(auth)
        .then(()=>{
            window.localStorage.removeItem('userInfo')
            props.setRefresh(!props.refresh)
    console.log("signed out");
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
           <button onClick={()=>usersignout()} className='Signup' > <Link to="/" >  sign out </Link>  </button>
           
        </div>
    )
}



export default Handlesignout