import React, { Component } from 'react';
import BannerCarousel from './bannerCarousel';
import Button from './button';

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <section className="outerConteiner">
          <BannerCarousel />
        </section>
        <section className="introduction">
          <div className="centered">
            <div className="article">
              <h2>Welcome</h2>
              <h3>to Our Site</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque non fringilla dui, ut dapibus arcu. Sed fermentum facilisis
              hendrerit. Fusce rutrum dapibus auctor. <br />Aliquam ornare nunc dolor,
              vitae suscipit ligula vulputate in. Aenean lectus risus, tincidunt
              feugiat nibh in, tempor ullamcorper dolor. Nulla dapibus vulputate
              risus, id lobortis elit sodales vitae.</p>
              <Button content="Read More" />
            </div>
            <picture className="introImg">
              <img src="../images/photo10.jpg" alt="" />
            </picture>
          </div>
        </section>
      </div>
    )
  }
}
export default HomePage;
