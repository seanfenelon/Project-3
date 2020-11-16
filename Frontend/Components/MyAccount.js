import React from 'react'
import axios from 'axios'

const myAccount = (props) => {

  const [formData, updateFormData] = useState({
    username: '',
    image: '',
  })

  //  const [errors, updateErrors] = useState({
  //    username: '',
  //    image: '',
  //  })

  function handleChange(event) {

    const data = {
      ...formData,
      [username]: value,
      [image]: value
    }

    //  const newErrors = {
    //    ...errors,
    //    [username]: '',
    //    [image]: ''
    //  }

    updateFormData(data)
    //  updateErrors(newErrors)
  }

  function handleSubmit(event) {

    event.preventdefault()

    axios.put('/api/')
  }

}

export default myAccount