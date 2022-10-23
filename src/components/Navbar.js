import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">AboutUs</Link>
        </li>
     
    </ul> 
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div class={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input class="form-check-input" type="checkbox" onClick={props.toggleMode}  role="Switch" aria-checked="true" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault ">Enable Dark Mode</label>
  <div/>
</div>
  </div>
</nav>
  )
}

//USING PROPTYPES WE CAN ASSIGN DATA TYPE TO A ENTITY 
//IS REQUIRED IS USED TO SHOW THAT PROP IS REQUIRED FOR THE PERTICULAR ENTITY
 Navbar.propTypes={
   title: PropTypes.string.isRequired,
   aboutUs: PropTypes.string.isRequired
 };
//we we forget to pass any props then the default statement will show in that component 
 Navbar.defaultProps={
   title: 'Set title here',
   aboutUs: 'Set about Us here'
 };