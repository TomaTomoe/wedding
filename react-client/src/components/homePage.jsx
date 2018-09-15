import React, { Component } from 'react';
import BannerCarousel from './bannerCarousel';

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <BannerCarousel />
      </div>
    )
  }
}
export default HomePage;
