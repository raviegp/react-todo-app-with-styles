import React from 'react';
import ReactDOM from 'react-dom';
 
import TodoApp from './components/TodoApp';

import './styles/styles.scss';
  
const appRoot = document.getElementById('app');
 
 ReactDOM.render(<TodoApp />, appRoot);