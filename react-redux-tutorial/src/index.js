import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
