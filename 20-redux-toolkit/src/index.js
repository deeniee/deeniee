import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // #3. Provider로 store 연결
    // - React와 Redux 연결 : 모든 컴포넌트가 redux store에 접근할 수 있게 됨.
    <Provider store={store}>
        <App />
    </Provider>,
);
