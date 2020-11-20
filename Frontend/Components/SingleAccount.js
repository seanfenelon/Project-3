import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getCurrentUserId } from '../lib'

const SingleAccount = (props) => {

  const [formData, updateFormData] = useState({})
  const [accountData, updateAccountData] = useState({})
  const [text, updateText] = useState('')
  const token = localStorage.getItem('token')
  const [favourites, updateFavourites] = useState([])

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.id}`)
      .then((resp) => {
        updateFormData(resp.data)
        updateAccountData(resp.data)
        updateFavourites(resp.data.favourites)
      })
  }, [])

  console.log(accountData)
  console.log(formData)
  console.log(props)
  console.log(favourites)

  return <div className="background-image-single-account"> <div className="container container-resorts single-account">
    <div className="card border-primary" id="wide-card">
      <div className="text-light card-header border-primary bg-dark">
        About me
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Ski or Board:  {formData.ski_or_board}</li>
        <li className="list-group-item">Favourite resort: {formData.favourite_region}</li>
        <li className="list-group-item">Hometown:  {formData.hometown}</li>
        <li className="list-group-item">Experience level:  {formData.experience}</li>
        <li className="list-group-item">Favorutie brand:  {formData.favourite_brand}</li>
        <Link to={`/users/aboutme/${props.match.params.id}`}><li className="list-group-item text-danger">Edit About me {pencilIcon}</li></Link>
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

const pencilIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
</svg>