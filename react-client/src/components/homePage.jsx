import React, { Component } from "react";
import BannerCarousel from "./bannerCarousel";
import Button from "./button";
import AboutUs from "./aboutUs";
import SpecialOffer from "./specialOffer";

class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <section className="outerConteiner">
          <BannerCarousel />
        </section>
        <section className="introduction">
          <div className="centered">
            <div className="article borderLeft">
              <h2>Welcome</h2>
              <h3>to Our Site</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non fringilla dui, ut dapibus arcu. Sed fermentum facilisis
                hendrerit. Fusce rutrum dapibus auctor. <br />
                Aliquam ornare nunc dolor, vitae suscipit ligula vulputate in.
                Aenean lectus risus, tincidunt feugiat nibh in, tempor
                ullamcorper dolor. Nulla dapibus vulputate risus, id lobortis
                elit sodales vitae.
              </p>
              <Button content="Read More" />
            </div>
            <picture className="introImg">
              <img src="../images/photo07.jpg" alt="" />
            </picture>
          </div>
        </section>
        <section className="blankTriangle" />
        <section className="letter-A">
          <span>A</span>
        </section>
        <section className="services">
          <div className="centered">
            <h2>WHAT WE DO</h2>
            <h3>About Us</h3>
            <AboutUs />
          </div>
        </section>
        <SpecialOffer />
      </div>
    );
  }
}
export default HomePage;
