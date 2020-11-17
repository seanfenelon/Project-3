import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SingleResort = (props) => {


  const [singleResort, updateSingleResort] = useState({})

  useEffect(() => {
    axios.get(`/api/resorts/${props.match.params.name}`)
      .then((axiosResponse) => {
        updateSingleResort(axiosResponse.data)
      })
  }, [])

  return <div className="container-custom">

    <div className="card card-single">
      <img className="card-img-top-single" src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4328ae53a316c822/version/1510667937/luxurious-ski-resorts-courchevel-copyright-nikolpetr-european-best-destinations.jpg" alt="Card image cap"></img>
      <div className="card-body">
        <h1 className="card-title">{singleResort.name}</h1>
        <h5>{singleResort.country}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <p>{singleResort.top_elevation}</p>
        <p>{singleResort.bottom_elevation}</p>
        
      </div>
    </div>

  </div>

}

export default SingleResort