import React, { useState } from 'react';

export const CounterFunction1 = () => {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    };

    const decrease = () => {
        setNumber(number - 2);
    };

    return (
        <>
            <div>State 실습</div>
            <h1>Count : {number}</h1>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
        </>
    );
};
