import React from 'react';
//import axios from 'axios'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

return (
   
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Sample App</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign up</Link>
              </li>            
              
            </ul>
          </div>
        </div>
      </nav>
      
      
  );
};
export default Navbar;