// [리듀서 모듈이 여러개일 때], rootreducer 생성

// #5. 통합 리듀서 생성!
// [여러개의 리듀서]
// - 리듀서들의 결합을 위해 combineReducers 메소드 사용
//  ㄴ 여러개의 리듀서를 하나로 결합

import { combineReducers } from 'redux';
import conterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';

const rootReducer = combineReducers({
    counter: conterReducer, // count 상태를 관리하는 리듀서
    isVisible: isVisibleReducer, // visibility 상태를 관리하는 리듀서
});
// 각 리듀서가 관리하는 상태가 "key"를 기준으로 분리됨.
/**
 * {
 * count : {
 * }}
 */

export default rootReducer;
