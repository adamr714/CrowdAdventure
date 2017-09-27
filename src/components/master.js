import React from 'react';
import Navigation from './Navigation';
import HomeCarousel from './carousel'

import {Router, Route, hashHistory} from 'react-router';


export class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
  
        };
        // this.onClick = this.onClick.bind(this);
    }
  
  
        render() {
          return(
              <div>
                    <Navigation />
                    <HomeCarousel />
              </div>    
          );
        }
  }

  export default Master;