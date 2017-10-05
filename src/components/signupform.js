import React, { Component } from 'react';
import { Form, Text } from 'react-form'


class SignUpForm extends Component {
    render() {
        return (
            <div className=".col-12">
                <div className=".col-4">
                <Form
                    onSubmit={(values) => {
                    console.log('Success!', values)
                    }}
                    validate={({ name, password }) => {
                    return {
                        name: !name ? 'A name is required' : undefined,
                        password: (!password || password.length < 6) ? 'A password of 6 or more characters is required' : null

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
                            field='name'
                            placeholder= 'Name'
                        />

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
 
export default SignUpForm;

 