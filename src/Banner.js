import React, { Component } from 'react';
import group from "./web/group-3x.png"
import"./Banner.css"

class Banner extends Component {
  render() {
    return (
    	<div>
        <img id="group" src= {group}/>
        <h1 id="header">Riyadh Fpeiw Stipece</h1>
        <p id="Lorem">Lorem ipsum dolor sit amet quis nostrud exercitation consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="http://i0.kym-cdn.com/photos/images/newsfeed/001/217/729/f9a.jpg">
        <div id="more"></div>
        <p id="more1">More</p>
        </a>
    	</div>
    );
  }
}

export default Banner;