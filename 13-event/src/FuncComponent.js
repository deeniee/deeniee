// 함수혈 컴포넌트에서의 이벤트 사용
// - 이벤트 핸들러를 함수로 정의한 뒤, JSX의 이벤트 속성 전달

import React, { useState } from 'react';

export const FuncComponent = () => {
    const [number, setNumber] = useState(0);
    // #1. 인자가 없는 함수
    const increase = () => {
        setNumber(number + 1);
    };

    // #2. 인자 1개가 있는 함수
    const alertMsg = (msg) => {
        alert(`${msg}, 현재 숫자는 ${number}입니다.`);
    };

    // #3. 인자가 2개 있는 함수
    const consoleMsg = (e, msg) => {
        console.log(e.target);
        console.log(`${msg}, 현재 숫자는 ${number}입니다.`);
    };
    // #4. e.target vs e.currentTarget
    // - e.target : 부모로부터 이벤트가 위임되어 발생하는 자식의 위치.
    //            >>> 즉, 내가 클릭한 자식 요소.
    // - e.currentTarget :이벤트 핸들러가 있는 요소.

    const handleEvent = (e) => {
        console.log('e.target >>> ', e.target);
        console.log('e.currentTarget >>> ', e.currentTarget);
    };

    return (
        <>
            <div>FuncComponent</div>
            <h3>Number Counter</h3>
            <h4>{number}</h4>

            {/* #1. 인자가 없는 함수의 경우 : 함수 이름만 전달 */}
            <button onClick={increase}>add</button>

            {/* #2. 인자가 1개 있는 함수 */}
            {/* {alertMsg('Hi')} : 함수를 즉시 실행하는 함수식, 반환값을 바로 온클릭에 전달되어 버려 함수가 미리 실행되어 버림 */}
            {/* () => {alertMsg('Hi')} : 페이지가 로드되자 마자 실행되는 걸 방지하기 위해 콜백함수 형식으로 작성 */}

            <button
                onClick={() => {
                    alertMsg('Hi');
                }}
            >
                alert 출력
            </button>

            {/* {/* #3. 인자가 2개 있는 함수 */}
            {/* 매개변수에 꼭 함수 인자를 넣어줘야함 */}
            {/* 이벤트 객체가 마지막 매개변수로 오는 것이 일반적 */}
            <button
                onClick={(e) => {
                    consoleMsg(e, 'Hello');
                }}
            >
                console 출력
            </button>

            {/* #4. e.target vs e.currentTarget */}
            <button onClick={handleEvent}>
                <span>handle event</span>
            </button>
        </>
    );
};
