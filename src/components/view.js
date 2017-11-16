import React from 'react';
import AdventureSmall from './adventure_small'
import http from '../services/http';

function Button(props) {
  return <button className="button_adventure" onClick={props.onClick}>{props.text}</button>;
}


export class ViewProjects extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          adventures : [],
          time : '',
          clicked: false
      };
  }

  
  async componentDidMount() {
    let adventures = await http.get('adventures');
    console.log(adventures)
    this.setState({adventures}) 

    let time = new Date();
    console.log(time);
    this.setState(time)
  };

  onButtonClick() {
    this.setState({
        clicked: true
    });
  }


      render() {
        const prelaunch = this.state.adventures.map((item, index) => {
          if (item.phase === "prelaunch")  {
            return (
              <div className="col-12" key={index}>
                <div className="adventureContainer" >
                    <div className="col-6>">
                       <img className="image_small" src={item.image} />
                    </div>

                    <div className="col-6>">
                      <p className="title">{item.projectTitle}</p>
                      <p>{item.shortDescription}</p>
                      <p>{"Number of Rewards: " + item.rewards.length}</p>
                      <p>{"Funding Goal: " + item.fundingGoal}</p>
                    </div>

                    <div>
                      <Button onClick={this.onButtonClick} text='Join this Adventure' />
                      {this.state.clicked}
                    </div>
                </div>
              </div>
            ) 
          } 
        })

        const launch = this.state.adventures.map((item, index) => {
          if (item.phase === "launch") {
            return (
              <div className="adventureContainer" key={index}>
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
              <div className="adventureContainer" key={index}>
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
              <h2 className="white">Currently Being Fulfilled</h2>
              {fulfilled}
            </div>
          </div>  
        );
      }
  
}

export default ViewProjects;




     

      