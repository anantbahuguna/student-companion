import React, { Component } from "react";
import Card from "../components/Card";
import "bulma/css/bulma.css";
import axios from "axios";
class Attendance extends Component {
  state = {
    subjects: [],
    attendance: []
  };
  componentDidMount() {
    console.log("hello", localStorage.getItem("access_token"));
    const final_token = localStorage.getItem("access_token").split(`"`);
    console.log("final",final_token[1]);
    // fetch("/showAttendance").then(res => {
    //   console.log(res);
    //   return res.json()
    // }).then(data =>{
    //   //var subj = subjects
    //   let aData = data.attendanceData
    //   console.log(adata[9])
    //   var subjects = aData.slice(0,aData.length/2)
    //   var attendance = aData.slice(aData.length/2,aData.length)
    //   console.log(subjects,attendance)
    //   this.setState({subjects})
    //   this.setState({attendance})

    // })
    axios
      .get("/showAttendance", {
        headers: {
          Authorization: "Bearer " + final_token[1]
        }
      })
      .then(
        res => {
          console.log(res)
          let aData = res.data.attendance;
          console.log(aData[9]);
          var subjects = aData.slice(0, aData.length / 2);
          var attendance = aData.slice(aData.length / 2, aData.length);
          console.log(subjects, attendance);
          this.setState({ subjects });
          this.setState({ attendance });
        },
        error => {
          console.log(error);
        }
      );
  }
  render() {
    return this.state.subjects.map((subj, i) => {
      return <Card subject={subj} attend={this.state.attendance[i]}></Card>;
    });
  }
}

export default Attendance;
