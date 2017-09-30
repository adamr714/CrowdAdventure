import React from 'react';
import Navigation from './Navigation';

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
             <div>
                 <Navigation />
             </div>     
             <h2>Log In</h2>
             <form>
             </form>  
          </div>
        );
      }
  
}

export default LogIn;




     

      