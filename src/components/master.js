import React from 'react';
import Navigation from './Navigation';

// import {Router, Route, hashHistory} from 'react-router';


export default function Master(props) {

    
    return (
        <div>
           <div>
                <Navigation />
           </div> 
            <div>
                {props.children}
            </div>    
        </div>  
    );
}