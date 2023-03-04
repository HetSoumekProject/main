import React from 'react'
import AllPosts from './AllPosts';

const Cars = (props) => {
    console.log("oooo",props.data);
  return (
    <div >
      
      {props.data.map((item , index) => (
        <div  key = {index}>
             
       <AllPosts car={item}/>
 </div>    
      ))}
    </div>
  )
}

export default Cars
