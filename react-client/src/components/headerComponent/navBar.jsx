import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">HOME</Link></li>
          <li className="navButton"><Link to="">ABOUT</Link></li>
          <li className="navButton"><Link to="">BLOG</Link></li>
          <li className="navButton"><Link to="">GALLERY</Link></li>
          <li className="navButton"><Link to="">CONTACTS</Link></li>
        </ul>
        <div className="logoBg"><img className="logo" src="../images/logo.png" alt="Logotype" /> </div>
        <div className="navInfo">
          <p><Icon name='home' className="iconColor" /> Adress: </p>
          <p><Icon name='phone' className="iconColor" flipped='horisontally' /> Phone: </p>
          <p><Icon name='clock' className="iconColor" /> Working Hours: </p>
        </div>
      </header>
    )
  }
}
export default NavBar;
