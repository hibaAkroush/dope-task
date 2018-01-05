import React, { Component } from 'react';
import Search from "./Search.js"
import Banner from "./Banner.js"

class Home extends Component {
  render() {
    return (
    	<div>
		<Search/>
		<Banner/>
		</div>
    );
  }
}

export default Home;