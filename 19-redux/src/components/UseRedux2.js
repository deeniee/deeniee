import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { plus, minus } from '../store/actions/counterAction';
// import { changeVisibility } from '../store/actions/isVisibleAction';
// # 추가) 한 번에 가져오기
import { plus, minus, changeVisibility } from '../store/actions';

export default function UseRedux2() {
    // #6. redux 사용!
    const count = useSelector((state) => state.counter.count);
    return (
        <div>
            <h1>UseRedux2</h1>
            <h2>Redux 사용!</h2>
            <h2>reducer 새로 추가</h2>
            <h2>count: {count}</h2>
            <Box1 />
        </div>
    );
}
// Box1 컴포넌트
const Box1 = () => {
    return (
        <div className="Box">
            <h2>Box1</h2>
            <Box2 />
        </div>
    );
};

// Box2 컴포넌트
const Box2 = () => {
    return (
        <div className="Box2">
            <h2>Box2 : </h2>
            <Box3 />
        </div>
    );
};

// Box3 컴포넌트
const Box3 = () => {
    return (
        <div className="Box3">
            <h2>Box3 : </h2>
            <Box4 />
        </div>
    );
};

// Box4 컴포넌트 (data 사용할 컴포넌트)
const Box4 = () => {
    const count = useSelector((state) => state.counter.count);
    const isVisible = useSelector((state) => state.isVisible);

    // #7. dispatch 사용
    const dispatch = useDispatch();
    return (
        <div className="Box4">
            <h2>Box4 : {count}</h2>
            <h2>isVisible 값은 "{isVisible ? 'true' : 'false'}"이다.</h2>

            <button onClick={() => dispatch(plus())}>PLUS</button>
            <button onClick={() => dispatch(minus())}>MINUS</button>

            {/* Q) 버튼을 클릭하면 true/false 토글 */}
            <button onClick={() => dispatch(changeVisibility())}>CHANGE</button>
        </div>
    );
};
