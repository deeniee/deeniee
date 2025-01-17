// (!) 액션 타입 가져오기
import { CHANGE } from '../actions/isVisibleAction';

// #1. state 초기값 정의
const imitialState = true;

// #2. reducer 작성
const isVidibleReducer = (state = imitialState, action) => {
    if (action.type === CHANGE) {
        return !state;
    }
    return state;
};

export default isVidibleReducer;
