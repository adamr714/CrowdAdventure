import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Navigation from './components/Navigation';
import Master from './components/master';
import registerServiceWorker from './registerServiceWorker';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from './components/home';
import About from './components/about';


const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Master} />
          <IndexRoute component={Home} />
          <Route path="/about" component={About} />
    </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
registerServiceWorker();



// const routes = (
//     <Router history={hashHistory}>
//         <Route path="/emails" component={App}>
//             <IndexRoute component={EmailListContainer} />
//             <Route path=":emailId" component={EmailContainer} />
//         </Route>
//     </Router>
// );