import React from 'react'

function CarImages(props) {
  return (
    <div>
        <img style={{width:"150px",height:"150px"}} src={props.images[0].image} />
    </div>
  )
}

export default CarImages