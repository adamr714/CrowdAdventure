import React from 'react';
import HomeCarousel from './carousel'
import Card from './card'
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
               <Card />
               <form>
               </form>  
            </div>
          );
        }
    
  }

export default Home;
