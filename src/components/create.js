import React from 'react';
// import CreateForm from './createform';
import SimpleForm from './simpleForm';
// import {connect} from 'react-redux';

export class Create extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }


      render() {
        return(
          <div className="">
            <div className="row">
            </div> 
             {/* <CreateForm />  */}
             <SimpleForm onSubmit={this.submit}/>
          </div>
        );
      }
  
}

export default Create;




     

      