import React from 'react'

function CarImages(props) {
  console.log("image",props.image)
  return (
    <div>

        <img className='pendin' style={{width:"200px",height:"100px"}} src={props.image} />

    </div>
  )
}

export default CarImages