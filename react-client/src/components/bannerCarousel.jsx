import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class BannerCarousel extends Component {
    render() {
    return (
      <Carousel
        autoplay = {true}
        pauseOnHover = {false}
        wrapAround = {true}
        autoplayInterval = {3000}
        renderCenterLeftControls = {false}
        renderCenterRightControls = {false}
        transitionMode = {'fade'}
        speed = {1000} >
        <img src="../images/photo01.jpg" />
        <img src="../images/photo02.jpg" />
        <img src="../images/photo03.jpg" />
        <img src="../images/photo04.jpg" />
        <img src="../images/photo05.jpg" />
      </Carousel>
    )
  }
}
export default BannerCarousel;
