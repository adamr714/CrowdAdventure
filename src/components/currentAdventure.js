import React from 'react';
import http from '../services/http';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

export class CurrentAdventure extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          adventure : {
            rewards : [],
            projectTitle : "",
            textValue:'Change me'
            },
          projectTitle: props.params.projectTitle
      };
      this.onButtonClick = this.onButtonClick.bind(this)
  }
  
  async componentDidMount() {
    this.updateAdventureDetails();    
    // this.setState({adventure}); 
  };

  onButtonClick() {
      this.setState({
        textValue: "Backed"
    });
  }

  async updateAdventureDetails() {
    let adventure = await http.get('adventures/' + this.state.projectTitle + '/');
    let joinedReward=null;
    try {
      joinedReward = await http.get('join/rewards/' + adventure._id);
    } catch (err) {
      console.log('The user might not be logged in');
    }
    console.log(adventure)
    this.setState({adventure:adventure, joinedReward: joinedReward});
  }

  async onButtonClick(event) {
    let adventureId = event.target.getAttribute('data-adventureID');
    let rewardId = event.target.getAttribute('data-rewardID');

    await http.post('join/create', {adventureID: adventureId, rewardID: rewardId});
    this.updateAdventureDetails();
  }

  
  render() {
      console.log(this.state.adventure.text);
      let adventureId = this.state.adventure._id;
      let self = this;

      const rewardDetails = this.state.adventure.rewards.map((item, index) => {
        let rewardLevel = item.amount;
        let reward = rewardLevel.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

        let joinButton = null;
        if (http._token != null && self.state.joinedReward == null) {
          joinButton = <div>
                        <button className="button_adventure" data-adventureID={adventureId} data-rewardID={item._id} onClick={this.onButtonClick}>Join this Adventure</button>
                      </div>;
        } 

        let backedClassName = "";
        if (self.state.joinedReward != null && self.state.joinedReward.rewardID == item._id) {
          backedClassName="backed";
        }

        return (
          <div className="rewards" key={index}>
            <div className={backedClassName + " row rewardContainer"}>
                <div>
                  <p className="individual_title">{item.title}</p>
                  <p className="individual_amount"><strong>${reward}</strong></p>
                  <p className="individual_description">{item.descripton}</p>
                </div>

                {joinButton}
            </div>
          </div>
        );
      })
 
      return(
        <div className="individual">
            <div className="row">
              <div className="col-12">
                <img className="image_center" src={this.state.adventure.image} alt={this.state.adventure.projectTitle}/>
              </div>  
            </div> 

            <div className="row">
              <div className="col-6">
                <p className="adventureSoloTitle">{this.state.adventure.projectTitle}</p>
                <p>{this.state.adventure.longDescription}</p>

                <p><strong>Funding Goal:</strong> ${this.state.adventure.fundingGoal}</p>
              </div>

              <div className="col-6">
                {rewardDetails}
              </div>
            </div>
        </div>  
      );
    }
}

const mapStateToProps = (state, props) => ({
  
});
   
export default connect(mapStateToProps)(CurrentAdventure);
   
     

      