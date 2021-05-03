import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HamburgerContextProvider from './context/HamburgerContext';

ReactDOM.render(
  <React.StrictMode>
    <HamburgerContextProvider>
      <App />
    </HamburgerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
