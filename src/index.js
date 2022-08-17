import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App';

// 1 imports needs
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//4. import reducers
import reducers from './reducers';
// import redux-thunk
import reduxThunk from 'redux-thunk';

// 2. Create a Stor to provider all App
const store = createStore(
  reducers, // All reducers from the App
  {}, // initial State
  applyMiddleware(reduxThunk)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Provider store={ store }>
    <App /> 
  </Provider>
);