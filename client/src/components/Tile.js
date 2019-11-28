import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Tile extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className='tile is-ancestor'>
          <div className='tile is-vertical is-8'>
            <div className='tile'>
              <div className='tile is-parent is-vertical'>
                
                <Link to='/timetable'>
                <article className='tile is-child notification is-warning'>
                  <p className='title'>TIME TABLE</p>
                  <p className='subtitle'>For all years</p>
                </article></Link>
              </div>
              
              <div className='tile is-parent'>
              <Link to='/attendance'>
                <article className='tile is-child notification is-info is-4by3 box'>
                <div className='content'>
                <p className='title'>ATTENDANCE</p>
                
                <div className='content'><p className='subtitle'>Check your attendance and see if you have to attend the next boring lecture or not</p></div>
              </div> 
                </article></Link>
              </div>
            </div>
            <Link to='/support'>
            <div className='tile is-parent'>
            
              <article className='tile is-child notification is-danger'>
              
                <p className='title'>CONTACT US</p>
                <p className='subtitle'>For any queries or suggestions....</p>
                <div className='content'></div>
              </article>
            </div></Link>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child notification is-success box'>
                <p className='title'>ABOUT US</p>
                
                <div className='content'><p className='subtitle'>
                  A group of geeks under a dedicated mentor.
                </p></div>
              
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
