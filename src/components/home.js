import React from 'react';
import HomeCarousel from './carousel'

export class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }

      render() {
        return(
          <div>
            <h2>Home Page</h2>  
            <HomeCarousel />
          </div>
        );
      }
}

export default Home;
