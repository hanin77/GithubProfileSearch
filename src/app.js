import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

  
  const jsx = <AppRouter />;

ReactDOM.render(jsx, document.getElementById('app'));
  

