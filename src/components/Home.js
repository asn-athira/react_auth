import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = (props) => {
const handleClick = () => {
    axios.delete('https://rails-client-api.herokuapp.com/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
  const messageView = () => {
    axios.delete('https://rails-client-api.herokuapp.com/home')
  }
return (
   
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/login"}>Sample App</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>{messageView}</Link>
              </li>              { 
                props.loggedInStatus ? 
                <li className="nav-item">
                <Link className="nav-link" onClick={handleClick} to={"/logout"}>Log Out</Link> 
                
                </li> :
                null
              }
              
            </ul>
          </div>
        </div>
      </nav>
      
      
    </div>
  );
};
export default Home;