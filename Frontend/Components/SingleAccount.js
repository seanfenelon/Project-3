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
  console.log(formData.username)

  return <div className="container-custom">
    <h1>hello world</h1>
  </div>

}

export default SingleAccount