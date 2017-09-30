import React from 'react';
import Navigation from './Navigation';

export class About extends React.Component {
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
             <h2>About Us</h2>
          </div>
        );
      }
  
}

export default About;




     

      