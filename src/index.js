import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './reduxes/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // 데이터를 두 번씩 체크하여 주석 처리.
  <Provider store={store}>
    <App />
  </Provider>

  // </React.StrictMode>
);
