import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app')); // 'app' debe coincidir con el ID en tu archivo index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
