import React from 'react'

function CarImages(props) {
  console.log("image",props.image)
  return (
    <div>

        <img src={props.image.image} />

    </div>
  )
}

export default CarImages