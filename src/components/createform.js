import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import {connect} from 'react-redux';
import store from '../store';


import * as actions from '../actions/index';

const phase = [
    {
        label: 'Pre-launch',
        category: 'Pre-launch'
    },
    {
        label: 'Launch',
        category: 'Launch'
    },
    {
        label: 'Fulfilment',
        category: 'Fulfilment'
    }
];

const category = [
    {
        label: 'Game',
        category: 'Game'
    },
    {
        label: 'Publishing',
        category: 'Publishing'
    },
    {
        label: 'Comics',
        category: 'Comics'
    },
    {
        label: 'Dice',
        category: 'Dice'
    }
];

export class CreateForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-12">
                <div className="col-6">
                <Form
                    onSubmit={(values) => {
                        console.log('Success!', values);
                        // console.log(`Submitting form within our control - ${values.name} - ${values.email} - ${values.password}`);
                        // store.dispatch(actions.createUser(values.name, values.email, values.password));
                    }}
                    validate={({ name, password, email }) => {
                    return {
                        // name: !name ? 'A name is required' : null,
                        // password: (!password || password.length < 6) ? 'A password of 6 or more characters is required' : null,
                        // email: (!emailRegex.test(email)) ? 'Invalid e-mail': null
                    }
                    }}
                >
                    {({submitForm}) => {
                    return (
                        <form onSubmit={submitForm}>
                        <Text                          
                            field='Progject Title'
                            placeholder= 'Title'
                        />

                    
                        <label htmlFor="category" className="">Category</label>
                        <Select field="category" id="category" className="dropdown" options={category} />

                        <label htmlFor="phase" className="">Current Phase</label>
                        <Select field="phase" id="phase" className="dropdown" options={phase} />

                        <TextArea                          
                            field='short'
                            placeholder= 'Short Description'
                        />

                        <button type='submit' className="button">Create</button>
                        </form>
                    )
                    }}
                </Form>
                </div>
            </div>    
        );
    }
};

const mapStateToProps = (state, props) => ({

});
 
export default connect(mapStateToProps)(CreateForm);
 