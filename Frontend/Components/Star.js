import React, { useState } from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const StarRating = () => {
  const [value, setValue] = useState(0)
  
  function newRating(rating) {
    const totalRatings = {resort.numOfRatings} + 1
    const newAverage = (({resort.ratign} * resort.numOfRatings) + rating) / totalRatings
    const token = localStorage.getItem('token')
  }
  return <div>
    <h1>this is a heading</h1>
    <h1>this is a heading</h1>
    <h1>this is a heading</h1>
    <h1>this is a heading</h1>
    <h1>this is a heading</h1>
    
    
    <Rating
      name="hover-feedback"
      value={value}
      precision={0.5}
      onChange={(event, newValue) => {
        setValue(newValue)
        newRating(newValue)

      }}
      onChangeActive={(event, newHover) => {
        setHover(newHover)
      }}
    />
    {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    
    </div>
  
}

 
export default StarRating
