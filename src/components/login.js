import React from 'react';
import LoginForm from './loginform';
import {connect} from 'react-redux';

export class LogIn extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      // this.onClick = this.onClick.bind(this);
  }

      render() {
        return(
          <div>
            <div className="login">
                <div className="row">
                <h2 className="white">Log In</h2>
                <p className="pull_quote"><em>Let the adventure begin!</em></p>
                <div className="message">{this.props.message}</div>
                <LoginForm /> 
                </div> 
            </div>
          </div>    
        );
      }
  
}

const traci = (state, props) => ({
    data: state.user.user,
    message: state.user.creationSuccessMessage,
    message: state.user.loggedInMessage 
});

// const loggedInCorrectly = (state, props) => ({
//   data: state,
// });


export default connect(traci)(LogIn);
