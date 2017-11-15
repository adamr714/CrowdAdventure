import React from 'react';
import AdventureSmall from './adventure_small'
import http from '../services/http';

export class ViewProjects extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          adventures : []
      };
  }

  async componentDidMount() {
    let adventures = await http.get('adventures');
    this.setState({adventures}) 
  };

      render() {
        const prelaunch = this.state.adventures.map((item, index) => {
          if (item.phase === "prelaunch") {
            return (
              <div className="border">
              <p>{"Title: " + item.projectTitle}</p>
              <p>{"Short Description: " + item.shortDescription}</p>
              <p>{"Category: " + item.category}</p>
              <p>{"Goal: " + item.fundingGoal}</p>
              <p>{"Phase: " + item.phase}</p>
              </div>
            ) 
          } 
        })

        const launch = this.state.adventures.map((item, index) => {
          if (item.phase === "launch") {
            return (
              <div className="border">
              <p>{"Title: " + item.projectTitle}</p>
              <p>{"Short Description: " + item.shortDescription}</p>
              <p>{"Category: " + item.category}</p>
              <p>{"Goal: " + item.fundingGoal}</p>
              <p>{"Phase: " + item.phase}</p>
              </div>
            ) 
          } 
        })

        const fulfilled = this.state.adventures.map((item, index) => {
          if (item.phase === "fulfilled") {
            return (
              <div className="border">
              <p>{"Title: " + item.projectTitle}</p>
              <p>{"Short Description: " + item.shortDescription}</p>
              <p>{"Category: " + item.category}</p>
              <p>{"Goal: " + item.fundingGoal}</p>
              <p>{"Phase: " + item.phase}</p>
              </div>
            ) 
          } 
        })

        return(
          <div className="view">
            <div className="row">
              <h2 className="white">Pre-Launch Phase</h2>
              {prelaunch}
              <h2 className="white">Recently Launched</h2>
              {launch}
              <h2 className="white">Being Fulfilled</h2>
              {fulfilled}
            </div>
          </div>  
        );
      }
  
}

export default ViewProjects;




     

      