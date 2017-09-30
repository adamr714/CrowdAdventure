import React from 'react';
import Navigation from './Navigation';


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
             <Navigation /> 
             <h2>Sign Up</h2>
             <form>
             </form>  
          </div>
        );
      }
  
}

export default SignUp;
