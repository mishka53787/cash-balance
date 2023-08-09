// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithProvider from './Components/store'; // Update the path to your modified Store.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithProvider /> {/* Use the modified Store.js here */}
  </React.StrictMode>
);

reportWebVitals();
;

