import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
// import validate from "./validate";

import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import 'react-widgets/dist/css/react-widgets.css';


import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

// import simpleNumberLocalizer from 'react-widgets-simple-number';
// import NumberPicker from 'react-widgets/lib/NumberPicker';

// simpleNumberLocalizer();

Moment.locale('en');
momentLocalizer();




const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
<DateTimePicker
  onChange={onChange}
  format="DD MMM YYYY"
  time={showTime}
  value={!value ? null : new Date(value)}
/>

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

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
          type="text"
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
        <label>Funding Goal</label>
        <div>
          <Field
            name="fundingGoal"
            component="input"
            type="text"
            placeholder="Amount Needed to Succeed"
          />
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
})(SimpleForm);
