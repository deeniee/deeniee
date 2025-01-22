import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

import rootReducer from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
