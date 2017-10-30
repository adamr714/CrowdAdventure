import React from 'react';
// import CreateForm from './createform';
import SimpleForm from './simpleForm';
import {connect} from 'react-redux';

export class Create extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }


      render() {
        return(
          <div>
             <h2>Create a Project</h2>
             {/* <CreateForm />  */}
             <SimpleForm onSubmit={this.submit}/>
          </div>
        );
      }
  
}

export default Create;




     

      