import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getCurrentUserId } from '../lib'

const SingleAccount = (props) => {

  const [formData, updateFormData] = useState({})
  const [text, updateText] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.username}`)
      .then((resp) => {
        updateFormData(resp.data)
      })
  }, [])

  console.log('can you see me?')
  console.log(formData)

  return <div className="container container-resorts">
    <div className="card" key="index">
      <img className="user-card card-img-top" src={formData.image} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">{formData.username}</h5>
        <h6>{formData.username}</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <Link to={`/users/edit/${props.match.params.username}`} className="btn btn-secondary btn-resort">Update your account</Link>
        <Link to="/resorts/:name" className="btn btn-danger btn-resort">Delete {deleteIcon}</Link>
      </div>
    </div>
  </div>

}

export default SingleAccount











const deleteIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
</svg>