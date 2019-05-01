import React, { Component } from 'react';
import fstyle from './footer_style.css';

class Footer extends Component {
  render() {
    return (
    <footer className={fstyle}>
    <div className="container-fluid padding">
        <div className="row text-center">
            <div className="col-md-4">
                <hr className="light"/>
                <h5>Contact Information</h5>
                <hr className="light"/>
                <p>408-691-7625</p>
                <p>email:ray.yoon87@gmail.com</p>
                <p>7950 Henry Ave</p>
                <p>Philadelphia,PA,19128</p>
            </div>
            <div className="col-md-4">
                <hr className="light"/>
                <h5>Currently Available Hours</h5>
                <hr className="light"/>
                <p>Monday: 11:30am - 5pm</p>
                <p>Saturday: 10am- 5pm</p>
            </div>
            <div className="col-md-4">
                <hr className="light"/>
                <h5>Desired Distance To Work</h5>
                <hr className="light"/>
                <p>One hour driving distance</p>
                <p>from Temple University</p>
                <p>Philadelphia, PA, 19122</p>
            </div>
            <div className="col-12">
                <hr className="light-100"/>
                <h5>&copy; ray.yoon87@gmail.com</h5>
            </div>
        </div>
    </div>
    </footer>
    )
  }
}
export default Footer;

/*
      <footer className= "mainFooter" style={{alignSelf: 'flex-end'}}>
        <p>Click to <a id="email" href="mailto:ray.yoon87@gmail.com">Contact</a></p>
     </footer>
*/ 