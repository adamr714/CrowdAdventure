import React from 'react';
import LoginForm from './loginform';

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
             <LoginForm /> 
          </div>
        );
      }
  
}

export default LogIn;
