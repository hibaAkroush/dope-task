import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page2 from "./Page2"
import Home from "./Home"

ReactDOM.render(  
	<Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/Page2" component={Page2} />
      </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();

