import React, { Component } from "react";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ErrorCard from "./components/ErrorCard";
import Modal from "./components/Modal";
import Timetable from "./pages/Timetable";
import LogoutCard from "./components/LogoutCard";
import SupportCard from "./components/SupportCard";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path='/' component={Navbar} />
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/login' component={ErrorCard} />
          <Route exact path='/logout' component={LogoutCard} />
          <Route exact path='/support' component={SupportCard} />
          <Route exact path='/error' component={Modal} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/attendance' component={Attendance} />
          <Route exact path='/timetable' component={Timetable} />
        </Router>
      </div>
    );
  }
}

export default App;
