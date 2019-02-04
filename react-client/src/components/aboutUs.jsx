import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
var classNames = require("classnames");

const aboutUsBlock = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Image src="../images/photo06.jpg" className="paddingAround" />
      </Grid.Column>
      <Grid.Column width={8} className="paddingAround">
        <div
          className={
            "article height100percent borderBottom noPaddingLeft textToLeft"
          }
        >
          <div>
            <span className="numberCircle">1.</span>
          </div>
          <h4>Event Design</h4>
          <p>
            We will create a design plan for your wedding. We will cover
            everything from attire, to stationery, to personalized details,
            florals, and rentals to ensure a cohesive look for your event.
          </p>
        </div>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8} className="paddingAround">
        <div
          className={
            "article height100percent borderBottom noPaddingLeft textToRight"
          }
        >
          <div>
            <span className="numberCircle">2.</span>
          </div>
          <h4>Event Design</h4>
          <p>
            We will create a design plan for your wedding. We will cover
            everything from attire, to stationery, to personalized details,
            florals, and rentals to ensure a cohesive look for your event.
          </p>
        </div>
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src="../images/photo08.jpg" className="paddingAround" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
        <Image src="../images/photo10.jpg" className="paddingAround" />
      </Grid.Column>
      <Grid.Column width={8} className="paddingAround">
        <div
          className={
            "article height100percent borderBottom noPaddingLeft textToLeft"
          }
        >
          <div>
            <span className="numberCircle">3.</span>
          </div>
          <h4>Event Design</h4>
          <p>
            We will create a design plan for your wedding. We will cover
            everything from attire, to stationery, to personalized details,
            florals, and rentals to ensure a cohesive look for your event.
          </p>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default aboutUsBlock;
