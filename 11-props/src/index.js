import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// React 18 부터, React.StrictMode가 기본적으로 활성화.
// 이는 개발 모드에서 컴포넌트의 랜더링과 life cycle 메서드가 두번 호출되도록 하여,
// 부작용을 테스트하고 식별하는데 도움을 줌.
// 이로 인해 console.log가 두 번 찍힐 수 있음.
