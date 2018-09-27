import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
   const {
     content,
     linkto
   } = this.props;

   return (
     <div className="buttonContainer">
        <div className="buttonRose">
          <Link to="{linkto}" className="linkColor">{content}</Link>
        </div>
        <div className="buttonGreen">
          <Link to="{linkto}" className="linkColor">{content}</Link>
        </div>
     </div>
   )
 }
}
export default Button;
