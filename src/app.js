import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import 'normalize.css/normalize.css';

import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
*/


  // Store creation
  const store = configureStore();
  store.subscribe(()  => {
    const state = store.getState();
    console.log(state);
  });
  
  const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>);

ReactDOM.render(jsx, document.getElementById('app'));
  

