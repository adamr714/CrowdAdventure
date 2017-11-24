import React from 'react';
import { Field, reduxForm } from 'redux-form';
import store from '../store';

import * as actions from '../actions/index';

const validate = values => {
  const errors = {}
  
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 4) {
    errors.password = "Password must be a minimum of 6 characters"  
  }

  return errors
}

const warn = values => {
  const warnings = {}

  return warnings
}


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )


const newLoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  
  return (
    <div className="row loginForm">
    <form onSubmit={handleSubmit(data => {
        console.log('I have been submitted.');
        console.log(data);
        store.dispatch(actions.userLogin(data.email.toLowerCase(), data.password));
      })}>


    <Field name="email" type="email" component={renderField} label="Email" />
    <Field name="password" type="password" component={renderField} label="Password" />


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


export default reduxForm({
  form: 'login', // a unique identifier for this form
  validate,
  warn,
  destroOynUnmount: true
})(newLoginForm);
