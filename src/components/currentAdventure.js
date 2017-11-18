import React from 'react';
import http from '../services/http';
import {hashHistory} from 'react-router';

export class ViewProjects extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          adventure : [],
          projectTitle: props.params.projectTitle
      };
      this.onButtonClick = this.onButtonClick.bind(this)
  }
  
  async componentDidMount() {
    let adventure = await http.get('adventures/' + this.state.projectTitle + '/');
    console.log(adventure)
    this.setState({adventure}) 
  };

  onButtonClick(event) {
    
  }

  

  
    render() {
      return(
        <div className="home">
        <img src={this.state.adventure.image} />
          <p>{this.state.adventure.projectTitle}</p>
          <p>{this.state.adventure.longDescription}</p>
          <p>{this.state.adventure.fundingGoal}</p>
          {/* <p>{this.state.adventure.rewards[0]}</p> */}
          
          {/* {rewardDetails} */}
        </div>  
      );
    }
  
}

export default ViewProjects;




     

      