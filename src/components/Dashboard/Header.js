import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Header = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
return (
   
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
	  <a className="navbar-brand" href="#">Sample Project</a>
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>

	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item active">
	        <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
	      </li>
	      
	      <li className="nav-item dropdown">
	        
	        
	      </li>
	      <li className="nav-item">
	        <a className="nav-link disabled" href="#"></a>
	      </li>
       <li className="nav-item">
	         
	      </li>

	    </ul>
	    <form className="form-inline my-2 my-lg-0">
	      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
	      <Link className="btn btn-outline-success my-2 my-sm-0" onClick={handleClick} to={"/"}>Log Out</Link>
	         
	    </form>

	  </div>
	</nav>

  );
};
export default Header;