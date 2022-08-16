import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App';

// Redux initial implementation
import { legacy_createStore as createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
    reducers, // reducers
    {}, // initialState
    applyMiddleware(reduxThunk),
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={ store }>
        <App /> 
    </Provider>
);
