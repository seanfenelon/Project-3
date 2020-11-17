import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MapGL, { Marker, LinearInterpolator, FlyToInterpolator } from 'react-map-gl'
import d3 from 'd3-ease'
import { Link } from 'react-router-dom'

// const mapData = [
//   {
//     id: '1',
//     name: 'Val Thorens',
//     lat: 45.0076,
//     lon: 6.1218
//   }
// ]
const Home = () => {

  const [resorts, updateResorts] = useState([])
  // const [resortLocations] = useState(mapData)
  const [viewPort, setViewPort] = useState({
    height: '100vh',
    width: '100vw',
    zoom: 4,
    // latitude: 45.0076,
    // longitude: 6.1218,
    latitude: 54.5260,
    longtiude: 105.2551
    // transitionDuration: 5000,
    // transitionInterpolator: new FlyToInterpolator()
    // // transitionEasing: d3.easeCubic
  })

  useEffect(() => {
    axios.get('/api/resorts')
      .then(resp => {
        updateResorts(resp.data)
      })
  }, [])

  // onViewPortChange={(viewport) => setViewPort(viewPort)}
  function goToNorthAmerica() {
    const NorthAmericaViewPort = {
      // height, 
      // width,
      // transitionDuration,
      // transitionInterpolator,
      latitude: 5.5260,
      longtiude: 105.2551,// transitionEasing,
      zoom: 2,
      // latitude: 54.5260,
      // longtiude: -105.2551,
      height: '100vh',
      width: '100vw'
    }
    // preventDefault()
    console.log('north america')
    setViewPort(NorthAmericaViewPort)
  }

  {/* <button onClick={goToNorthAmerica()}>North America
    </button> */}

  return <MapGL

    mapboxApiAccessToken={'pk.eyJ1Ijoic2Vhbi1mZW5lbG9uIiwiYSI6ImNraGMxbHBvOTAycWUycm1wczNpemZ0MGsifQ.phMK4dt1j_7wvlbYTbLWxg'}
    
    {...viewPort}

    onViewportChange={(viewPort) => setViewPort(viewPort)}
  >
    {/* <button onClick={goToNorthAmerica}>North America
      </button> */}

    {resorts.map((resort, index) => {
      return <Marker
        key={index}
        latitude={resort.lat}
        longitude={resort.lon}
        offsetLeft={-30} offsetTop={-50}
      >
        {/* <div>
            <span>{resort.name}</span>
          </div> */}
        <img src="https://img.icons8.com/color/48/000000/marker.png" />
      </Marker>
    })}
  </MapGL>


}

export default Home