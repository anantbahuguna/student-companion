import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Modal from './Modal'
import logo from '../static/images/cover.jpg'

class Navbar extends Component {
  state = {
    isLoggedOut: false
  };
  componentDidMount() {
    // this.setState({isLoggedOut: false})
    // document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
      
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }

    // });
  }
  _logout() {
    localStorage.removeItem("access_token");
    this.setState({ isLoggedOut: true });
  }
  render() {
    return (
      <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src= {logo}
              width='50'
              height='28'
            />
          </a>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <Link to={"/home"} className='navbar-item '>
              Home
            </Link>

            <Link to={"/attendance"} className='navbar-item'>
              Show attendance
            </Link>
            <Link to='/timetable' className='navbar-item'>
              Time Table
            </Link>
            {/* <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>More</a>

              <div className='navbar-dropdown'>
                <a className='navbar-item'>About</a>
                <a className='navbar-item'>Jobs</a>
                <a className='navbar-item'>Contact</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>Report an issue</a>
              </div>
            </div> */}
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light' onClick={() => this._logout()}>
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {this.state.isLoggedOut?<Modal body='Logged Out' />:<br/>}
      </div>
    );
  }
}

export default Navbar;
