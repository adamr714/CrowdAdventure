import React from 'react';
import { Field, reduxForm } from 'redux-form';



const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="row">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            name="projectTitle"
            component="input"
            type="text"
            placeholder="Project Title"
          />
        </div>
      </div>

      <div>
        <label>Category</label> 
        <div>
          <Field name="category" component="select">
            <option />
            <option value="Game">Game</option>
            <option value="Publishing">Publishing</option>
            <option value="Comics">Comics</option>
            <option value="Dice">Dice</option>
          </Field>
        </div>
      </div>

      <div>
        <label>Phase</label> 
        <div>
          <Field name="phase" component="select">
            <option />
            <option value="prelaunch">Pre-Launch</option>
            <option value="launched">Launched</option>
            <option value="fulfillment">Fulfillment</option>
          </Field>
        </div>
      </div>

      <div>
        <label>Short Description</label>
        <div>
          <Field name="shortDescription" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    </div>
  );
};

// SimpleForm = reduxForm({
//     SimpleForm,
//     form: 'contact'
// })(SimpleForm) 

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
