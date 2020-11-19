import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getCurrentUserId } from '../lib'

const SingleAccount = (props) => {

  const [formData, updateFormData] = useState({})
  const [text, updateText] = useState('')
  const token = localStorage.getItem('token')
  const [favourites, updateFavourites] = useState([])

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.id}`)
      .then((resp) => {
        updateFormData(resp.data)
        updateFavourites(resp.data.favourites)
      })
  }, [])

  console.log('can you see me?')
  console.log(formData)
  console.log(props)
  console.log(favourites)

  return <div className="background-image-single-account"> <div className="container container-resorts single-account">
    <div className="card border-primary" id="wide-card">
      <div className="text-light card-header border-primary bg-dark">
        About me
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Ski or Board:</li>
        <li className="list-group-item">Favourite resort: </li>
        <li className="list-group-item">Hometown:</li>
        <li className="list-group-item">Experience level:</li>
        <li className="list-group-item">Favorutie brand:</li>
        <li className="list-group-item">Loves to...:</li>
      </ul>
    </div>

    <div className="card-group">
      <div className="card" key="index" id="a-card">
        <img className="card-img-top" src={formData.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{formData.username}</h5>
          <h6>{formData.firstname} {formData.lastname}</h6>
          <p className="card-text">{formData.bio}</p>
          <Link to={`/users/edit/${props.match.params.id}`} className="btn btn-dark btn-resort">Update your account</Link>
        </div>
      </div>
    </div>


    <div className="card border-primary" id="wide-card">
      <div className="text-light card-header border-primary bg-dark">
        My saved resorts
      </div>
      <div className="card-body">

        {formData && favourites.map((property, index) => {

          return <div key={index}>

            <Link to={`/resorts/${property}`}>{property}</Link>

          </div>

        })}
      </div>



    </div>
  </div>
  </div>
}

export default SingleAccount

