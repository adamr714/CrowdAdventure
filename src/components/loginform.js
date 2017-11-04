import React from 'react';
import { Form, Text } from 'react-form'
import {connect} from 'react-redux';
import store from '../store';

import * as actions from '../actions/index';


export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var emailRegex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return (
            <div className=".col-12">
                <div className=".col-4">
                <Form
                onSubmit={(values) => {
                    console.log('Success!', values);
                    console.log(`Submitting login form - ${values.email} - ${values.password}`);
                    store.dispatch(actions.userLogin(values.email, values.password));
                }}
                    validate={({ email, password }) => {
                        return {
                            password: (!password || password.length < 6) ? 'A password of 6 or more characters is required' : null,
                            email: (!emailRegex.test(email)) ? 'Invalid e-mail': null
                        }
                    }}
                >
                    {({submitForm}) => {
                    return (
                        <form onSubmit={submitForm} ref="loginForm">
                        <Text
                            field='email'
                            placeholder= 'Email Address'
                        />

                        <Text
                            field='password'
                            placeholder= 'Password'
                        />


                        <button type='submit' className="button">Log In</button>
                        </form>
                    )
                    }}
                </Form>
                </div>
            </div>    
        );
    }
};
 
export default LoginForm;

 