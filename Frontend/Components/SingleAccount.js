import React from 'react'
import axios from 'axios'

const SingleAccount = (props) => {

  const [formData, updateFormData] = useState({
    username: '',
    image: '',
    password: ''
  })

  //  const [errors, updateErrors] = useState({
  //    username: '',
  //    image: '',
  //  })

  function handleUpdate(event) {

    const data = {
      ...formData,
      [username]: value,
      [image]: value,
      [password]: value
    }

    //  const newErrors = {
    //    ...errors,
    //    [username]: '',
    //    [image]: ''
    //  }

    updateFormData(data)
    //  updateErrors(newErrors)
  }

  function handleDeleteAccount(event) {

    event.preventdefault()

    axios.delete(`/api/users/${fornData.username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

}

export default SingleAccount