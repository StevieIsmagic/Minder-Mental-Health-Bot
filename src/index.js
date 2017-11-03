import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


import App from './components/App';

// keep this CSS? OR..
import './index.css';
/*
* import ./global-styles ?
*/


ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

// keep this?
registerServiceWorker();
