import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Provider 가져오기
import store from './store'; // Redux 스토어 가져오기 // index.js 생략

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* #6. React와 reducer 연결
            Provider
            - Redux 스토어 공유
            ㄴ 하위 모든 컴포넌트가 Redux 스토어에 접근 가능
            - 때문에 최상위 컴포넌트에서 사용해야함

        */}
        <Provider store={store}>
            <App />
        </Provider>
    </>,
);
