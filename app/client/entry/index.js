import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../javascript/store/configureStore';
import App from '../javascript/containers/app';
import App2 from '../javascript/containers/app2';
import '../stylesheets/index.scss'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
);

ReactDOM.render(
  <Provider store={store}>
    <App2 />
  </Provider>,
  document.getElementById('root-addition')
);

