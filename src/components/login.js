import React from 'react';
// import LoginForm from './loginform';
import SimpleForm from './newLoginForm';
import {connect} from 'react-redux';

export class LogIn extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };
  }

      render() {
        return(
          <div>
            <div className="login">
                <div className="row">

                <p className="pull_quote"><em>Let the adventure begin!</em></p>

                <div className="message">{this.props.message}</div>
                {/* <LoginForm />  */}
                <SimpleForm />

                <p className="demo">If you are interested in logging in as a demo user, please use: <br />
              <strong>Email:</strong> Demo@demo.com<br />
              <strong>Password:</strong> demo</p>


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

export default connect(traci)(LogIn);
