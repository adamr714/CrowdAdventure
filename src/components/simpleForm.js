import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/dist/css/react-widgets.css';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
// import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

Moment.locale('en');
momentLocalizer();

let time = new Date();
let currentDate = Date.parse(time);

const category = ['Game', 'Publishing', 'Comics', 'Dice']
const phase = ['prelaunch', 'launched', 'fulfillment']



const renderField = ({ input, label, type, placeholder, className, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} className={className} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const renderCategory = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Category</option>
      {category.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const renderPhase = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Phase</option>
      {phase.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const renderDateTimePicker = ({ input: { onChange, value }, meta: { touched, error }, showTime }) => (
<div>  
<DateTimePicker
  onChange={onChange}
  format="DD MMM YYYY"
  time={showTime}
  value={!value ? null : new Date(value)}
/>
{touched && error && <span>{error}</span>}
</div>
)


const validate = values => {
  const errors = {}
  if (!values.projectTitle) {
    errors.projectTitle = 'Required'
  } else if (values.projectTitle.length > 45) {
    errors.projectTitle = 'Must be 45 characters or less'
  }
  
  if (!values.fundingGoal) {
    errors.fundingGoal = "Required, Please don't use $ , or ."
  } else if (isNaN(Number(values.fundingGoal))) {
    errors.fundingGoal = 'Must be a number'
  }

  if (!values.category) {
    errors.category = 'Required'
  }

  if (!values.category){
    errors.category = "Required"
  }

  if (!values.phase){
    errors.phase = "Required"
  }

  if (!values.image){
    errors.image = "Required"
  }

  if (!values.startDate){
    errors.startDate = "Required"
  } 

  if (!values.endDate){
    errors.endDate = "Required"
  } else if (values.endDate < values.startDate) {
    errors.endDate = "It cannot end before it begins..."
  }
  return errors
}


const renderRewards = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        Add Reward
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((reward, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Reward"
          onClick={() => fields.remove(index)}
        />
        <h4>Reward #{index + 1}</h4>
        <Field
          name={`${reward}.title`}
          type="text"
          component={renderField}
          label="Title"
        />
        <Field
          name={`${reward}.amount`}
          type="number"
          component={renderField}
          label="Amount"
        />
        <Field
          name={`${reward}.descripton`}
          type="text"
          className="long_description"
          component={renderField}
          label="Description"
        />


        {/* <FieldArray name={`${reward}.hobbies`} component={renderHobbies} /> */}
      </li>
    ))}
  </ul>
)



const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  
  return (
    <div className="row">
    <form onSubmit={handleSubmit(data => {
        console.log('I have been submitted.');
        console.log(data);
        store.dispatch(actions.createAdventure(data));
      })}>

      <Field name="projectTitle" type="text" component={renderField} placeholder="Project Title" label="Project Title" />

      <div> 
        <label>Category</label>
        <Field name="category" component={renderCategory} />
      </div>

      <Field name="fundingGoal" type="number" component={renderField} placeholder="Amount Needed to Produce Adventure" label="Funding Goal" />

      <div> 
        <label>Phase</label>
        <Field name="phase" component={renderPhase} />
      </div>

      <Field name="image" type="text" component={renderField} placeholder="Image URL - Image should be 400 x 200px" label="Image URL" />

      <div>
        <label>Short Description</label>
        <div>
          <Field className="short_description" name="shortDescription" component="textarea" />
        </div>
      </div>

      <div>
        <label>Long Description</label>
        <div>
          <Field className="long_description" name="longDescription" component="textarea" />
        </div>
      </div>

      <div>
        <label>Start Date</label>
        <Field
          name="startDate"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>

      <div>
        <label>End Date</label>
        <Field
          name="endDate"
          showTime={false}
          component={renderDateTimePicker}
        />
      </div>




      <FieldArray name="rewards" component={renderRewards} />



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
  form: 'simple', // a unique identifier for this form
  // dispatch: store.dispatch(actions.userLogin(handleSubmit.short, ));
  validate,
  destroOynUnmount: true
})(SimpleForm);
