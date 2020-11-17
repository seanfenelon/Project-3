import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getUserId, isCreator } from '../lib/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const SingleResort = (props) => {

  const token = localStorage.getItem('token')
  const [singleResort, updateSingleResort] = useState({})
  const [text, setText] = useState('')
  const trash = <FontAwesomeIcon icon={faTrash} size="1x" />

  useEffect(() => {
    axios.get(`/api/resorts/${props.match.params.name}`)
      .then((axiosResponse) => {
        updateSingleResort(axiosResponse.data)
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
      <img className="card-img-top-single" src={`${singleResort.image}`} alt="Card image cap"></img>
      <div className="card-body">
        <h1 className="card-title">{singleResort.name}</h1>
        <h5>{singleResort.country}</h5>
        <p className="card-text-single">Some quick example text to build on the card title and make up the bulk of the cards content.Some quick example text to build on the card title and make up the bulk of the cards content.Some quick example text to build on the card title and make up the bulk of the cards content.Some quick example text to build on the card title and make up the bulk of the cards content.Some quick example text to build on the card title and make up the bulk of the cards content.</p>


        <div className="comments-box">


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