import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


class Menu extends Component {
  render() {
    return (
      <div id="menu">

      	<Link to="/page2"><p id="logo">MAKANI</p></Link>

      	<div className="block"></div>

      	<Link to="/"><p id="Events">Events</p></Link>
      	<div className="block1">Sports (20)<br/>Festivals (11)<br/>Conderence (1)<br/>Family (30)<br/>Business (22) <br/>VIP (33)</div>

      	<p id="membership">Membership</p>
      	<div id="border1"></div>
      	<p id="seasonal">Seasonal <br/>Tickets</p>
      	<div id="border2"></div>
      	<p id="purchases">Purchases</p>
	    <div id="border3"></div>
	    <p id="about">About Makani</p>
	    <p id="contacts">Contact us</p>
	    <p id="help">Help & FAQ</p>
	    <div id="border4"></div>
	    <p id="user"> User Name</p>
      </div>
    );
  }
}

export default Menu