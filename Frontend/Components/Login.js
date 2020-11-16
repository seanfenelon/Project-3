import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {

  const [formData, updateFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange(event) {
    const data = {
      ...formData,
      [event.target.name]: event.target.value
    }
    updateFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios.post('/api/login', formData)
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        props.history.push('/resorts')
      })
  }

  return <div className="container container-custom">

    <form onSubmit={handleSubmit}>

      <div className="form-group">

        <input
          className="form-control"
          placeholder="Email"
          type="text"
          onChange={handleChange}
          value={formData.email}
          name="email"
        />

      </div>

      <div className="form-group">

        <input
          className="form-control"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          name="password"
        />

      </div>

      <button className="btn btn-primary">Login</button>

    </form>

  </div>

}

export default Login