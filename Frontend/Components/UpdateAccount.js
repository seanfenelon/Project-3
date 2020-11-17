import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    passwordConfirmation: ''
  })

  const inputFields = ['username', 'email', 'password', 'passwordConfirmation', 'image']

  useEffect(() => {
    axios.get(`/api/users/${props.match.params.username}`)
      .then(resp => {
        updateFormData(resp.data)
      })
  }, [])

  function handleChange(event) {
    const data = {
      ...formData,
      [event.target.name]: event.target.value
    }
    updateFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getIten('token')
    axios.put(`/api/users/${props.match.params.username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        props.history.push(`/users/${props.mathc.params.username}`)
      })
  }

  console.log(formData)

  return <div className="container container-custom">

    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Upload Image"
          type="text"
          onChange={handleChange}
          value={formData.image}
          name="image"
        />
        {errors.username && <p style={{ color: 'red' }}>
          {`There was a problem with your ${errors.username.path}`}
        </p>}
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
        {errors.username && <p style={{ color: 'red' }}>
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
        {errors.email && <p style={{ color: 'red' }}>
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
        {errors.password && <p style={{ color: 'red' }}>
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
        {errors.passwordConfirmation && <p style={{ color: 'red' }}>
          {'Does not match password'}
        </p>}
      </div>

      <button className="btn btn-secondary">Update</button>

    </form>

  </div>

  //  <div className="container container-custom">
  //    <form onSubmit={handleSubmit}>
  //      <div className="form-group">
  //        {inputFields.map((field, index) => {
  //          return <input
  //            key={index}
  //            type="text"
  //            className="form-control"
  //            onChange={handleChange}
  //            value={formData[field]}
  //            name={field}
  //          />
  //        })}
  //      </div>
  //    </form>
  //  </div>

}

export default UpdateAccount