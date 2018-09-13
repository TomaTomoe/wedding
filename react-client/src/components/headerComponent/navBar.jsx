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
        <div className="navInfo">
          <p><Icon name='home' /> Adress: </p>
          <p><span>@</span> Phone: </p>
          <p><span>@</span> Working Hours: </p>
        </div>
      </header>
    )
  }
}
export default NavBar;
