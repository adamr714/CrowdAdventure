import React from 'react';
// import CreateForm from './createform';
import SimpleForm from './simpleForm';
import {connect} from 'react-redux';

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
             <h2>Create a Project</h2>
             {/* <CreateForm />  */}
             <SimpleForm />
          </div>
        );
      }
  
}

export default Create;




     

      