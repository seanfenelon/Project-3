import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Resorts = () => {


  const [resorts, updateResorts] = useState([])

  useEffect(() => {

    Axios.get('api/resorts')
      .then(resp => {

        const data = resp.data
        updateResorts(data)
        console.log(data)

      })
  }, [])

  return <div className="container container-resorts">


    {resorts.map((resort, index) => {

      return <div className="card" key="index">
        <img className="card-img-top" src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4328ae53a316c822/version/1510667937/luxurious-ski-resorts-courchevel-copyright-nikolpetr-european-best-destinations.jpg" alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{resort.name}</h5>
          <h6>{resort.country}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <Link to="/resorts/:name" className="btn btn-primary btn-resort">View Resort</Link>
        </div>
      </div>

    })}


  </div>
}

export default Resorts