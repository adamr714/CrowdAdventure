import React from 'react';
import AdventureSmall from './adventure_small'


export class ViewProjects extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      // this.onClick = this.onClick.bind(this);
  }


      render() {
        return(
          <div className="view">
            <div className="row">
              {/* <h2 className="white">Current Projects</h2> */}
              <h2 className="white">Pre-Launch Phase</h2>
              <AdventureSmall />
              <h2 className="white">Recently Launched</h2>
              <AdventureSmall />
              <h2 className="white">Being Fulfilled</h2>
              <AdventureSmall />
            </div>
          </div>  
        );
      }
  
}

export default ViewProjects;




     

      