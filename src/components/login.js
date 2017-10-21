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
             <h2>Log In</h2>
             <div className="message">{this.props.message}</div>
             <LoginForm /> 
          </div>
        );
      }
  
}

const traci = (state, props) => ({
    data: state,
    message: state.creationSuccessMessage
});



export default connect(traci)(LogIn);
