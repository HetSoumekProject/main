import React from 'react';
import { Link } from 'react-router-dom';
import "./pop.css"
 const Pop=() => {
    return(
        <div>
        <div className='coverpop'>
            </div>
    <div className='pop'>
        
        your car is successfully posted !
        <br/>
        our technical team is consulting your car    
           <br/>
          it can last a maximum of 8 hours
       <br/> 
       Thank you for understanding
        <br/>
       <button className='button'><Link style={{ textDecoration: 'none',color:'white' }} to='/cars'>ok</Link></button> 
    </div>

    </div>
)}
export default Pop