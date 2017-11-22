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
    let adventure = await http.get('adventures/' + this.state.projectTitle + '/');
    this.setState({adventure}); 
  };

  onButtonClick() {
      this.setState({
        textValue: "Backed"
    });
  }

    render() {
      console.log(this.state.adventure.text);
      const rewardDetails = this.state.adventure.rewards.map((item, index) => {
        let rewardLevel = item.amount;
        let reward = rewardLevel.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          if(true) {
          return (
            <div className="rewards" key={index}>
              <div className="row rewardContainer" >
                  <div>
                    <p className="individual_title">{item.title}</p>
                    <p className="individual_amount"><strong>${reward}</strong></p>
                    <p className="individual_description">{item.descripton}</p>
                  </div>

                  <div>                  
                   <button className="button_adventure" onClick={this.onButtonClick}>Join this Adventure</button>
                  </div>

              </div>
            </div>
          )
        } 
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
   
     

      