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
          <div>
             <h2>Sign Up</h2>
             <div className="message">{this.props.message}</div> 
             <SignUpForm /> 
          </div>
        );
      }
  
}

const traci = (state, props) => ({
  data: state,
  message: state.creationFailedMessage
});

export default connect(traci)(SignUp);
