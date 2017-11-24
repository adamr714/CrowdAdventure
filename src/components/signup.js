import React from 'react';
// import SignUpForm from './signupform';
import SimpleForm from './newSignUpForm';
import {connect} from 'react-redux';

export class SignUp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
  }


      render() {
        return(
          <div className="signUp">
            <div>
              <div className="row">
            

            
              <p className="pull_quote"><em>"I've never risked anything and I'm really happy and successful" &mdash; No one ever</em></p>





              <div className="message">{this.props.message}</div> 

              {/* <SignUpForm />  */}
              <SimpleForm />
              
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
