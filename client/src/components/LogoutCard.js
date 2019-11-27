import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
class LogoutCard extends Component {
  componentDidMount() {
    Axios.get("/logout").then(
      res => {
        if (res.data === "logged out") localStorage.removeItem("access_token");
        console.log('token removed')
      },
      error => {
        console.log(error);
      }
    );
    // this.setState({ isLoggedOut: true });
  }
  render() {
    return (
      <div className='columns is-flex is-vcentered is-centered'>
        
        <div className='column is-two-thirds-mobile is-one-third-tablet is-one-quarter-desktop'>
          <br/><br/><br/><br/>
          <div className='card'>
            <header className='card-header'>
              <p className='card-header-title has-text-centered'>
                You have been logged out
              </p>
              <a
                href='#'
                className='card-header-icon'
                aria-label='more options'
              >
                <span className='icon'>
                  <i className='fas fa-angle-down' aria-hidden='true'></i>
                </span>
              </a>
            </header>
            <div className='card-content'>
              <div className='content'>
                <Link to='/' className='button is-link is-fullwidth'>
                  Login
                </Link>

                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogoutCard;
