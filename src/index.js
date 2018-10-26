import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const hello = 'Hello Worldzzzzzzzzz'

ReactDOM.render( <App hello={hello}/>, document.getElementById('app') );

module.hot.accept();

