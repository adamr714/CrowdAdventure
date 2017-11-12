import React from 'react';
import SignUpForm from './signupform';
import {connect} from 'react-redux';

export class SignUp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
      // this.onClick = this.onClick.bind(this);
  }


      render() {
        return(
          <div className="signUp">
            <div>
              <div className="row">
              <h2 className="white">Sign Up</h2>

            
              <p className="pull_quote"><em>"I've never risked anything and I'm really happy and successful" &mdash; No one ever</em></p>

              <div className="message">{this.props.message}</div> 

              <SignUpForm /> 

              
              </div>
            </div>
          </div>  
        );
      }
}

const traci = (state, props) => ({
  data: state,
  message: state.creationFailedMessage
});

export default connect(traci)(SignUp);
