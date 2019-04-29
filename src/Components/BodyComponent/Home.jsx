import React, { Component } from 'react';
import first_slide from '../../img/media_player.png';
import second_slide from '../../img/squirrel_college.png';
import third_slide from '../../img/gits.png';

/*

import styled from 'styled-components';
const Styles = styled.div'
  .carousel-inner img{
    width:100%;
    height:100%;
  }
';
*/

/*
<Carousel>
        <Carousel.Item>
          <img
            src= {first_slide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button type="button" classNameName ="btn btn-outline-light btn-lg">AppStore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameName="d-block w-100"
            src={second_slide}
            alt="Second slide"
          />
          <Carousel.Caption>            
            <button type="button" classNameName ="btn btn-outline-light btn-lg">AppStore</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            classNameName="d-block w-100"
            src={third_slide}
            alt="Third slide"
          />
        </Carousel.Item>
    </Carousel>

*/


class Home extends Component {
   
  render() {
    return (
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" className="active"></li>
            <li data-target="#slides" data-slide-to="1"></li>
            <li data-target="#slides" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={first_slide} alt= "first_slide"/>
              <div className="carousel-caption">
                  <button type="button" className="btn btn-outline-light btn-lg">VIEW DEMO</button>
                  <button type="button" className="btn btn-primary btn-lg">Get Started</button>
              </div>
            </div>
            <div className="carousel-item">
                <img src={second_slide} alt="second_slide"/>
            </div>
            <div className="carousel-item">
                <img src={third_slide} alt="thrid_slide"/>
            </div>
        </div>
      </div>
    )
  }
}
export default Home;