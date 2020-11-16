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

  return <div className="container-custom">
    <div className="card">
      <img className="card-img-top" src={formData.image} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Username: {formData.username}</h5>
      </div>

    </div>

  </div>

}

export default SingleAccount