import React, { Component } from 'react';
import { Form, Text } from 'react-form'


class CreateForm extends Component {
    render() {
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


                        <button type='submit' className="button">Sign Up</button>
                        </form>
                    )
                    }}
                </Form>
                </div>
            </div>    
        );
    }
};
 
export default CreateForm;

 