import React from 'react'

function CarImages(props) {
  console.log("image",props.image)
  return (
    <div>

        <img className='pendin' style={{width:"400px",height:"200px"}} src={props.image.image} />

    </div>
  )
}

export default CarImages