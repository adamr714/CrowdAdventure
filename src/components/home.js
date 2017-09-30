import React from 'react';
import HomeCarousel from './carousel'
import Navigation from './Navigation';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
  
        };
        // this.onClick = this.onClick.bind(this);
    }
  
  
        render() {
          return(
            <div>
               <HomeCarousel />
               <form>
               </form>  
            </div>
          );
        }
    
  }

export default Home;
