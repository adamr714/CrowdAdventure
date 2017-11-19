import React from 'react';
import http from '../services/http';
import {hashHistory} from 'react-router';

export class ViewProjects extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          adventures : [],
      };
      this.onButtonClick = this.onButtonClick.bind(this)
  }
  
  async componentDidMount() {
    let adventures = await http.get('adventures');
    console.log(adventures)
    this.setState({adventures}) 
  };

  onButtonClick(event) {
    let projectName = event.target.getAttribute('data-project')
    hashHistory.push('/view/' + projectName)
  }

      render() {
          const prelaunch = this.state.adventures.map((item, index) => {
          let time = new Date();
          let currentTime = Date.parse(time);
          let endDate = Date.parse(item.endDate);
          let publish = endDate - currentTime;

          let fundingGoal = item.fundingGoal;
          let correctFundingGoal = fundingGoal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

          if (item.phase === "prelaunch" && publish > 0)  {
            return (
              <div className="col-12" key={index}>
                <div className="row adventureContainer" >

                    <div className="col-6">
                       <img className="image_small" src={item.image} />
                    </div>

                    <div className="col-6">
                      <p className="title">{item.projectTitle}</p>
                      <p className="creator">{"Created By: " + item.createdBy}</p>
                      <p className="description">{item.shortDescription}</p>
                      <p className="rewards">{"Number of Rewards: " + item.rewards.length}</p>
                      <p className="goal">{"Funding Goal: $" + correctFundingGoal}</p>
                      {/* <p className="">{"# of Adventures: " + item.adventures}</p>
                      <p className="">{"% Funded " + item.funded}</p> */}
                    </div>

                    <div>
                      <button className="button_adventure" data-project={item.projectTitle} onClick={this.onButtonClick}>Join this Adventure</button>
                    </div>
                </div>
              </div>
            ) 
          } 
        })

        const launch = this.state.adventures.map((item, index) => {
          let time = new Date();
          let currentTime = Date.parse(time);
          let endDate = Date.parse(item.endDate);
          let publish = endDate - currentTime;

          let fundingGoal = item.fundingGoal;
          let correctFundingGoal = fundingGoal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

          if (item.phase === "launch" && publish > 0)  {
            return (
              <div className="col-12" key={index}>
                <div className="row adventureContainer" >

                    <div className="col-6">
                       <img className="image_small" src={item.image} />
                    </div>

                    <div className="col-6">
                      <p className="title">{item.projectTitle}</p>
                      <p className="creator">{"Created By: " + item.createdBy}</p>
                      <p className="description">{item.shortDescription}</p>
                      <p className="rewards">{"Number of Rewards: " + item.rewards.length}</p>
                      <p className="goal">{"Funding Goal: $" + correctFundingGoal}</p>
                      {/* <p className="">{"# of Adventures: " + item.adventures}</p>
                      <p className="">{"% Funded " + item.funded}</p> */}
                    </div>

                    <div>
                      <button className="button_adventure" data-project={item.projectTitle} onClick={this.onButtonClick}>Join this Adventure</button>
                    </div>
                </div>
              </div>
            ) 
          } 
        })

        const fulfilled = this.state.adventures.map((item, index) => {
          let time = new Date();
          let currentTime = Date.parse(time);
          let endDate = Date.parse(item.endDate);
          let publish = endDate - currentTime;

          let fundingGoal = item.fundingGoal;
          let correctFundingGoal = fundingGoal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          if (item.phase === "fulfilled"  && publish > 0) {
            return (
              <div className="col-12" key={index}>
                <div className="row adventureContainer" >

                    <div className="col-6">
                       <img className="image_small" src={item.image} />
                    </div>

                    <div className="col-6">
                      <p className="title">{item.projectTitle}</p>
                      <p className="creator">{"Created By: " + item.createdBy}</p>
                      <p className="description">{item.shortDescription}</p>
                      <p className="rewards">{"Number of Rewards: " + item.rewards.length}</p>
                      <p className="goal">{"Funding Goal: $" + correctFundingGoal}</p>
                      {/* <p className="">{"# of Adventures: " + item.adventures}</p>
                      <p className="">{"% Funded " + item.funded}</p> */}
                    </div>

                    <div>
                      <button className="button_adventure" data-project={item.projectTitle} onClick={this.onButtonClick}>Join this Adventure</button>
                    </div>
                </div>
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




     

      