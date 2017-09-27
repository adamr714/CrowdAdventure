import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Navigation from './components/Navigation';
import Master from './components/master';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Master />, document.getElementById('app'));
registerServiceWorker();
