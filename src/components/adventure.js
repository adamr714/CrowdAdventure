import React from 'react';

export default function Adventure(props) {
    return (
        <div>
            <strong>{props.name}</strong>
            &nbsp;
            {props.phoneNumber}
        </div>    
    );
};

