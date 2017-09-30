import React from 'react';
import Navigation from './Navigation';

export class ViewProjects extends React.Component {
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
             <h2>Current Projects</h2>
          </div>
        );
      }
  
}

export default ViewProjects;




     

      