import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getUserId, isCreator } from '../lib/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const SingleResort = (props) => {

  const token = localStorage.getItem('token')
  const [singleResort, updateSingleResort] = useState({})
  const [weather, updateWeather] = useState({ current: { weather: [{}] }, daily: [] })
  const [text, setText] = useState('')
  const trash = <FontAwesomeIcon icon={faTrash} size="1x" />

  useEffect(() => {
    axios.get(`/api/resorts/${props.match.params.name}`)
      .then((axiosResponse) => {
        updateSingleResort(axiosResponse.data.resort)
        updateWeather(axiosResponse.data.weather)

      })
  }, [])

  function handleComment() {
    axios.post(`/api/resorts/${singleResort.name}/comments`, { text }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        setText('')
        updateSingleResort(resp.data)
      })
  }


  function handleDeleteComment(commentId) {

    axios.delete(`/api/resorts/${singleResort.name}/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        updateSingleResort(resp.data)
      })
  }


  return <div className="container container-custom">

    <div className="card card-single">
      <div className="text-center">
        <img className="card-img-top-single" src={`${singleResort.image}`}  alt="Card image cap"></img>
        <p><strong>Top Elevation:</strong> {singleResort.top_elevation}</p>
        <p><strong>Bottom Elevation:</strong> {singleResort.bottom_elevation}</p>

      </div>

      <div className="card-body">
        <div className="resort-info-upper">
          <h1 className="card-title">{singleResort.name}</h1>
          <h6>{singleResort.country}</h6>
          <p className="card-text card-text-single">{singleResort.description}</p>
          <h6>Current temperature: {(weather.current.temp - 273) | 0}°C {weather.current.weather[0].description}</h6>
          <div className="container">
            <div className="row">
              {weather.daily.map(day => {
                return <div className="col" key={day.dt}><p>{(day.temp.max - 273) | 0}°C</p> <p>{(day.temp.min - 273) | 0}°C</p> <p>{day.weather[0].main}</p></div>
              })}
            </div>
          </div>
        </div>


        <div className="comments-box">
          <h5>Comments</h5>

          <div className="comments">
            
            {singleResort.comments && singleResort.comments.map(comment => {

              return <div key={comment._id} className="row comments-spaced text-center">

                <p className="comment-user">{comment.user.username}</p>
                <p className="comment">{comment.text}</p>

                {isCreator(comment.user._id) && <div>

                  <a className="trash-icon" onClick={() => handleDeleteComment(comment._id)}>{trash}</a>
                </div>}

              </div>

            })}

          </div>

          {/* POST comment */}

          {token && <div className="submit-area">

            <textarea
              className="textarea"
              placeholder="Make a comment.."
              onChange={event => setText(event.target.value)}
              value={text}
              rows="1"
              cols="15"
            >
              {text}
            </textarea>


            <button
              onClick={handleComment}
              className="btn btn-primary btn-submit-comments"
            >
              Submit</button>

          </div>}


        </div>

      </div>

    </div>
  </div>

}

export default SingleResort