import React, { useEffect, useState } from 'react'
import Map, {NavigationControl,Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
function TheMap({car}) {

  return (
    <div>
         <Map mapLib={maplibregl} 
         initialViewState={{
          longitude:Number(car.longitude),
          latitude:Number(car.latitude),
         }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=pTFM9jihc0CHGecZoDlj"
      >
        <NavigationControl position="top-left" />
        <Marker longitude={Number(car.longitude)} latitude={Number(car.latitude)}/>
      </Map>
    </div>
  )
}

export default TheMap