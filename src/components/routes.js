import React, { Component } from 'react';

import Master from './components/master';
import Home from './components/home';
import About from './components/about';
import Create from './components/create';
import ViewProjects from './components/view';
import LogIn from './components/login';
import SignUp from './components/signup';

const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Master} >
          <IndexRoute component={Home} />
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/create" component={Create} />
          <Route path="/view" component={ViewProjects} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />  
       </Route>           
    </Router>
);