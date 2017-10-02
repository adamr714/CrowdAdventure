import React, { Component } from 'react';
import { Form, Text } from 'react-form'


class LoginForm extends Component {
    render() {
        var emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (
            <div className=".col-12">
                <div className=".col-4">
                <Form
                    onSubmit={(values) => {
                    console.log('Success!', values)
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
                        <form onSubmit={submitForm}>
                        <Text
                            onChange={(e, onChange) => {
                                console.log('it changed')
                                onChange()
                            }}
                            field='email'
                            placeholder= 'Email Address'
                        />

                        <Text
                            onChange={(e, onChange) => {
                                console.log('it changed')
                                onChange()
                            }}
                            field='password'
                            placeholder= 'Password'
                        />


                        <button type='submit'>Sign Up</button>
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

 