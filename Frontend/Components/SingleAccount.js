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

  return <div className="container container-resorts">
    <div className="card-group">

      <div className="card" key="index" id="a-card">
        <img className="card-img-top" src={formData.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{formData.username}</h5>
          <h6>{formData.username}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <Link to={`/users/edit/${props.match.params.username}`} className="btn btn-dark btn-resort">Update your account</Link>

        </div>
      </div>

    </div>
    <div className="card" id="wide-card">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Favourites</h5>

        {formData && favourites.map((property, index) => {

          return <div key={index}>

            <Link to={`/resorts/${property}`}>{property}</Link>

          </div>

        })}

        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>

}

export default SingleAccount
