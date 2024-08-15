import "./HeroImage2Styles.css";

import React, {Component} from 'react'

class HeroImage2 extends Component {
  render(){
    return (
        <div className="heading">
          <div className='mask2'>
            <img className='intro-img' src = {this.props.img} alt = 'Intro Image'/>
          </div>
          <div className="texts">
            <h1>{this.props.header}</h1>
            <p>{this.props.txt}</p>
        </div>
        </div>
      );
  }
}

export default HeroImage2
