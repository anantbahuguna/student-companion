import React, { Component } from 'react'
import TimetableButton from '../components/TimetableButton'


class Timetable extends Component {
    state={
        years: ['1st Year','2nd Year','3rd Year','4th Year'],
        btnClass: ['is-info','is-success','is-warning','is-danger']
    }
    render() {
        return (
            <div>
                {this.state.years.map((y,i)=>{
                    return <TimetableButton year={y} btnClass={this.state.btnClass[i]} /> 
                })}
            </div>
        )
    }
}

export default Timetable
