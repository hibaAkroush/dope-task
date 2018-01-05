import React, { Component } from 'react';
import './Search.css';
import fb from "./web/facebook-3x.png"
import tw from "./web/twitter-3x.png"
import insta from "./web/instagram-3x.png"
import SearchButton from "./web/1.png"
import dd from "./web/dd.png"

class Search extends Component {
  render() {
    return (
    	<div>
			<div id="block"></div>
			<input id="input"></input>
			<p id="value">Search by event name</p> 
      <img id="searchButton" src={SearchButton}/>
			<button id="choose"></button>
      <p id="textChoose">Choose City</p>
      <img src={dd} className="dropdownmenu1"/>
			<button  id="week"></button>
      <img src={dd} className="dropdownmenu2"/>
      <p id="textWeek">This Week</p>
      <img id="tw" src={tw}/> 
    	<img id="fb" src={fb}/> 
      <img id="insta" src={insta}/> 
    	</div>
    );
  }
}

export default Search;