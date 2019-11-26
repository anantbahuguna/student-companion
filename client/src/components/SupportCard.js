import React, { Component } from "react";

class SupportCard extends Component {
  render() {
    return (
        <React.Fragment>
            <br/><br/><br/>
      <section className='hero is-medium is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>For any query and support or if you want to report a bug, send me an Email</h1>
           
            <br/>
            <a className=' button ' href="mailto:anantbahugunaddn@gmail.com">Send</a>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}

export default SupportCard;
