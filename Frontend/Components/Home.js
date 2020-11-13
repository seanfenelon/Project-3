import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MapGL, { Marker } from 'react-map-gl'

const mapData = [
  {
    id: '1',
    name: 'Val Thorens',
    lat: 45.0076,
    lon: 6.1218
  }
]
const Home = () => {
  const [resortLocations] = useState(mapData)
  const [viewPort, setViewPort] = useState({
    height: '100vh',
    width: '100vw', 
    zoom: 5,
    latitude: 45.0076,
    longitude: 6.1218
  })
  
  return <MapGL

    mapboxApiAccessToken={'pk.eyJ1Ijoic2Vhbi1mZW5lbG9uIiwiYSI6ImNraGMxbHBvOTAycWUycm1wczNpemZ0MGsifQ.phMK4dt1j_7wvlbYTbLWxg'}
    { ...viewPort }
    onViewPortChange={(viewPort) => setViewPort(viewPort)}
  >
    {resortLocations.map(place => {
      return <Marker 
        key={place.id}
        latitude={place.lat}
        longitude={place.lon}
      >
        <div>
          <span>{place.name}</span>
        </div>
      </Marker>
    })}
  </MapGL>
  // return <h1>Hello World</h1>



}

export default Home