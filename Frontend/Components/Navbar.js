import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => {

  function handleLogout() {
    localStorage.removeItem('token')
    props.history.push('/resort')
  }

  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/resorts" className="button is-dark">
              <strong>Resorts</strong>
            </Link>
            <Link to="/register" className="button is-light">
              Signup
            </Link>
            <Link to="/login" className="button is-light">
              Login
            </Link>
            {localStorage.getItem('token') && <Link to='/player/new-resort' className="button is-primary">
              New Resort
            </Link>}
            {localStorage.getItem('token') && <button
              className="button"
              onClick={handleLogout}
            >
              Logout
            </button>}
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default withRouter(NavBar)