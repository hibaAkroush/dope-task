import React, { Component } from 'react';
import Search from "./Search.js"
import Banner from "./Banner.js"
import List1 from "./List1.js"
import elems from "./json-data/list1.js"

class Home extends Component {

  render() {

    return (
    	<div>
		<Search/>
		<Banner/>
		<List1 elems = {elems}/>
		</div>
    );
  }
}

export default Home;