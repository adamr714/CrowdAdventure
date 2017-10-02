import React from 'react';
import SignUpForm from './signupform';

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
             <SignUpForm /> 
          </div>
        );
      }
  
}

export default SignUp;
