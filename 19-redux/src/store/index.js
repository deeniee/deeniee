import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import rootReducer from './reducers/index';

// #5. store 생성
// - createStore 사용
// - 리듀서와 미들웨어 결합하여 설정

// [단일 리듀서]일 때,
// const store = createStore(counterReducer);

// [여러 리듀서]일 때,
const store = createStore(rootReducer);

export default store;
