import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Modal from "../components/Modal";
import Tile from "../components/Tile";
class Home extends Component {
  state={
    showModal: true
  }
  componentDidMount() {
  
  }
  render() {
    return (
      <Tile />
    );
  }
}

export default Home;
