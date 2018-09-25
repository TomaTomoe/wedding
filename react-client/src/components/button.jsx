import React, { Component } from 'react';

class Button extends Component {
  render() {
   const {
     content
   } = this.props;

   return (
     <button>
       {content}
     </button>
   )
 }
}
export default Button;
