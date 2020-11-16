import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const NavBar = (props) => {

  function handleLogout() {
    localStorage.removeItem('token')
    props.history.push('/resort')
  }

  return <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

    <Link to="/" className="navbar-brand nav-brand">Ski Resorts</Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse text-right" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">

        {!localStorage.getItem('token') && <li className="nav-item">
          <Link to="/Login" className="nav-link">Login</Link>
        </li>}

        {!localStorage.getItem('token') && <li className="nav-item">
          <Link to="/joinus" className="nav-link">Join us</Link>
        </li>}

        <li className="nav-item">
          <Link to="/resorts" className="nav-link">Resorts</Link>
        </li>

        {localStorage.getItem('token') && <li className="nav-item">
          <Link to="/newresort" className="nav-link">New Resort</Link>
        </li>}

        {localStorage.getItem('token') && <li className="nav-item">
          <Link to="/myaccount/:name" className="nav-link">My Account</Link>
        </li>}

        {localStorage.getItem('token') && <li className="nav-item">
          <Link to="/home" className="nav-link nav-contact"
            onClick={handleLogout}
          >Logout</Link>
        </li>}

        

      </ul>
    </div>

  </nav>

}



export default withRouter(NavBar)