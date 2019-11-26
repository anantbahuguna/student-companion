import React, { Component } from "react";
import { Link } from "react-router-dom";
class LoginButton extends Component {
  state = {
    isLoggedIn: false
  };
  
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <Link to='/logout' className='button is-light'>
            <strong>Log Out</strong>
          </Link>
        ) : (
          <Link to='/' className='button is-primary'>
            <strong>Log In</strong>
          </Link>
        )}
      </div>
    );
  }
}

export default LoginButton;
