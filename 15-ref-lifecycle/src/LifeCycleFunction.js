import React, { useState } from 'react';
import LifeCycleFunctionChild from './LifeCycleFunctionChild';

// 부모 컴포넌트
export default function LifeCycleFunction() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false);

    const changeNumber = () => {
        setNumber(number + 1);
    };
    const changeVisible = () => {
        setVisible(!visible); // 토글 효과
    };
    return (
        <>
            <div>부모 컴포넌트</div>
            <button onClick={changeNumber}>PLUS</button>
            <span> </span>
            <button onClick={changeVisible}>ON / OFF</button>
            <p>|</p>
            {visible && <LifeCycleFunctionChild number={number} />}
        </>
    );
}
