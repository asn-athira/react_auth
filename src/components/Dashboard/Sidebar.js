import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Dashboard.css'

const Sidebar = (props) => {

return (
  <div className="sidebar">
	  <a className="active" href="#home">Home</a>
	  <a href="#news">News</a>
	  <a href="#contact">Contact</a>
	  <a href="#about">About</a>
	</div>      
  );
};
export default Sidebar;