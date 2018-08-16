import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import {unregister} from './registerServiceWorker'
import store from './ducks/store'
import {Provider} from 'react-redux'


ReactDOM.render(


    <Provider store={store}>
        <App />
    </Provider>



, document.getElementById('root'));
unregister();
