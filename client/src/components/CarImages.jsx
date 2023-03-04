import React from 'react'

function CarImages(props) {
  console.log(props.image)
  return (
    <div>

        <img style={{width:"200px",height:"100px"}} src={props.image.image} />

    </div>
  )
}

export default CarImages