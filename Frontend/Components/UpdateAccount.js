import React, { useState, useEffect } from 'react'
import axios from 'axios'
//hmmm
const UpdateAccount = (props) => {

  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: ''
  })

  const [errors, updateErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: ''
  })

  function handleChange(event) {

    const name = event.target.name

    const value = event.target.value

    const data = {
      ...formData,
      [name]: value
    }
    const newErrors = {
      ...errors,
      [name]: ''
    }

    updateFormData(data)
    updateErrors(newErrors)

  }

  function handleUpdate(event) {

    event.preventDefault()

    const token = localStorage.getItem('token')
    axios.put(`/api/users/${props.match.params.username}`, formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        console.log(res.data)
        props.history.push(`/user/${props.match.params.username}`)
      })

  }

  function handleImageUpload(event) {
    event.preventDefault()

    const token = localStorage.getItem('token')

    window.cloudinary.createUploadWidget(
      {
        cloudName: 'dzt94',
        uploadPreset: 'skiresortapp',
        cropping: true
      },
      (err, result) => {
        if (result.event !== 'success') {
          return
        }
        console.log(result.info.secure_url)
        axios.put(`/api/users/${props.match.params.username}`, { image: result.info.secure_url }, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then((res) => updateFormData(res.data))
      }
    ).open()
  }

  console.log(formData)

  return <div className="container container-custom">

    <form onSubmit={handleUpdate}>

      <div className="form-group">
        <img src={formData.image} />
        <button
          type="image"
          value={formData.image || ''}
          onClick={handleImageUpload}
          name="image"
        >Upload
        </button>
      </div>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Username"
          type="text"
          onChange={handleChange}
          value={formData.username}
          name="username"
        />
        {errors.username && <p id="error" style={{ color: 'red' }}>
          {`There was a problem with your ${errors.username.path}`}
        </p>}
      </div>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Email"
          type="text"
          onChange={handleChange}
          value={formData.email}
          name="email"
        />
        {errors.email && <p id="error" style={{ color: 'red' }}>
          {`There was a problem with your ${errors.email.path}`}
        </p>}
      </div>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Password"
          type="Password"
          onChange={handleChange}
          value={formData.password}
          name="password"
        />
        {errors.password && <p id="error" style={{ color: 'red' }}>
          {`There was a problem with your ${errors.password.path}`}
        </p>}
      </div>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
          value={formData.passwordConfirmation}
          name="passwordConfirmation"
        />
        {errors.passwordConfirmation && <p id="error" style={{ color: 'red' }}>
          {'Does not match password'}
        </p>}
      </div>

      <button className="btn btn-primary">Submit</button>

    </form>

  </div>

}

export default UpdateAccount


//! Put this back in maybe
