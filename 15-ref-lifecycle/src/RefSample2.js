import React, { useRef, useState } from 'react';

export default function RefSample2() {
    const id = useRef(7); //초기값을 7로 설정
    console.log('id >>> ', id);

    const plusIdRef = () => {
        id.current += 1; // current의 값을 직접 수정\
        console.log('id.current >>> ', id.current);
    };

    const [number, setNumber] = useState(1);
    const plusNumState = () => {
        setNumber(number + 1);
    };
    return (
        <>
            <div>함수형 컴포넌트에서 버튼 클릭 시, id 값을 1씩 증가</div>
            <h1>Ref</h1>
            <p>: 리렌더링이 필요하진 않지만 변경된 값이 필요할 때 사용</p>
            <h2>{id.current}</h2>
            <button onClick={plusIdRef}>PLUS</button>

            <h1>State</h1>
            <p>: state는 ref와 달리, 값이 변경되면 리렌더링됨.</p>
            <h2>{number}</h2>
            <button onClick={plusNumState}>PLUS</button>
        </>
    );
}
