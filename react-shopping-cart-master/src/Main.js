import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/shop">SHOP</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/gift">Gift Cards</a></li>

          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;