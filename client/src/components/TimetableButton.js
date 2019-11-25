import React,{Component} from 'react';
import Viewer from 'react-viewer';

// import file from './3-001.jpg'
import images from '../images'



// function TimetableButton() {
//   const [ visible, setVisible ] = React.useState(false);

//   return (
//     <div>
//       <button className={this.props.btnClass} onClick={() => { setVisible(true); } }>{this.props.year}</button>
//       <Viewer
//       visible={visible}
//       onClose={() => { setVisible(false); } }
//     //   images={[{src: require('./3-001.jpg'), alt: ''}]}
//     images={images[this.props.year[0]]}
//       />
//     </div>
//   );
// }
class TimetableButton extends Component {
  state = {
    visible: false,
    btnClass: 'button is-medium is-fullwidth '+this.props.btnClass
  }
  setVisible(val) {
    this.setState({visible: val})
  }
  render() {
    return (
      <div>
        <br/>
      
      <div className='columns is-flex is-vcentered is-centered'>
        
      <div className='column is-two-thirds-mobile is-one-third-tablet is-one-quarter-desktop box'>
        <br/>
      <button className={this.state.btnClass} onClick={() => { this.setVisible(true); } }>{this.props.year}</button>
      <Viewer
      visible={this.state.visible}
      onClose={() => { this.setVisible(false); } }
    //   images={[{src: require('./3-001.jpg'), alt: ''}]}
    images={images[this.props.year[0]]}
      />
      <br/>
    </div>
    <br/>
    </div>
    </div>
    )
  }
}

export default TimetableButton;