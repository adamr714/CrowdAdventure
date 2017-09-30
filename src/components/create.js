import React from 'react';
import Navigation from './Navigation';

export class Create extends React.Component {
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
             <h2>Create a Project</h2>
             <form>
             </form>    
          </div>
        );
      }
  
}

export default Create;




     

      