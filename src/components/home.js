import React from 'react';
import HomeCarousel from './carousel'
import AdventureSmall from './adventure_small'
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
  
        };
        // this.onClick = this.onClick.bind(this);
    }
  
  
        render() {
          return(
            <div className="adventure">
              {/* <div className="spacer"></div> */}
            
               <HomeCarousel />
              <div className="row">
                <div className="col-12">
                    <h2 className="white">New Projects</h2>
                    <AdventureSmall />
                </div>
               </div>
            </div>
          );
        }
    
  }

export default Home;
