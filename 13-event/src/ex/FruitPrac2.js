import React, { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Result from './Result';

// 부모 컴포넌트
// 상태관리를 한 번에 하는 방법
export default function FruitPrac2() {
    // 1. 초기값 설정
    const [data, setData] = useState({
        fruit: 'Apple',
        background: 'red',
        text: 'black',
        content: '',
    });
    console.log(data);

    return (
        <>
            {/* props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능 */}
            <div>
                <Select setData={setData}></Select>
            </div>
            <div>
                <Input setData={setData}></Input>
            </div>
            <div>
                <Result data={data}></Result>
            </div>
        </>
    );
}
