import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Common.css';
import Navbar from './../Navbar'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      email: '',
      password: '',
      errors: ''
     };
  }
  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {email, password} = this.state
let user = {
            email: email,
      password: password
    }
    
    axios.post('https://rails-client-api.herokuapp.com/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
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
        <ul>
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })
        }
        </ul>
      </div>
    )
  }
render() {
    const {email, password} = this.state
return (
      <div>
        <Navbar />
        <div className="outer">
          <div className="inner">
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
              
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
              <button className="btn btn-dark btn-lg btn-block" placeholder="submit" type="submit">
                Log In
              </button>
              <div>
                or <Link to='/signup'>sign up</Link>
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
export default Login;
