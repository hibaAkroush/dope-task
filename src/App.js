import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./Menu.js"
import Home from './Home.js'


class App extends Component {
  render() {
    return (
    <div>
      	<Menu/>
    	<Home/>
    </div>
    );
  }
}

export default App;
