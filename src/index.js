import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter } from 'react-router-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { configureStore } from '@reduxjs/toolkit';
import App from 'App';
import './index.css';
import { store, persistor } from './redux/store';

// const reducer = (state = {}, action) => state;
// const store = configureStore(reducer);
// const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading="Loading..." persistor={persistor}>
      <HashRouter>
      {/* <BrowserRouter basename="/goit-react-hw-08-phonebook"> */}
        <App />
      {/* </BrowserRouter> */}
      </HashRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
