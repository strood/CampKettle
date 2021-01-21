//root style
import './styles/index.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

//React based imports below
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
