import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Common.css';
import Navbar from './../Navbar';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
//axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
axios.post('https://rails-client-api.herokuapp.com/users', {user}, {headers:{"Content-Type" : "application/json"}}, {withCredentials: true})

    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/dashboard')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }
render() {
    const {username, email, password, password_confirmation} = this.state
return (
      <div>
        <Navbar />
        <div className="outer">
          <div className="inner">
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control" 
                  placeholder="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="password confirmation"
                  type="password"
                  name="password_confirmation"
                  value={password_confirmation}
                  onChange={this.handleChange}
                />
              </div>
            
              <button className="btn btn-dark btn-lg btn-block" placeholder="submit" type="submit">
                Sign Up
              </button>
              <div>
                or <Link to='/login'>sign in</Link>
              </div>
            </form>
          </div>
        </div>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Signup;