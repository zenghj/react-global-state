import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from '../../lib/react-global-state';

const initState = {
  login: false
}
ReactDOM.render(<Provider globalState={initState}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
