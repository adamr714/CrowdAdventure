import React from 'react';
import AdventureSmall from './adventure_small'
import http from '../services/http';

export class ViewProjects extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      // this.onClick = this.onClick.bind(this);
  }

  async componentDidMount() {
    let adventures = await http.get('adventures');
    console.log(adventures);

    let prephase = []
    let launched = []
    let fulfilled = []

    for (let i = 0; i < adventures.length; i++) {
      switch(adventures[i].phase) {
        case "prephase":
          prephase.push(adventures[i]);
          console.log(prephase);
          break;
        case "launched":
          launched.push(adventures[i]);
          break;
        case "fulfilled":
          fulfilled.push(adventures[i]);
          break;  
      } 
    }
  };
    
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




     

      