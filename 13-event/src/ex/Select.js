import React from 'react';

export default function Select({ setData }) {
    return (
        <div>
            Fruit :
            <select
                onChange={(e) => {
                    // data state 값의 fruit값을 변경해주기
                    // console.log(e.target.value); // e.target.value 확인

                    //spread 연산자 (...연산자)
                    // ...data : 이전 값 그대로
                    // - 객체의 복사본을 만들 때 유용한 문법
                    // - 객체의 모든 속성을 펼쳐서 새로운 객체를 만들어줌

                    // 'fruit'값만 변경이 일어남, 'fruit'속성만 선택된 값으로 덮어 쓰여짐.
                    // >>> 'fruit'속성만 변경되고 나머지는 그대로 유지
                    // > 불변성 유지!
                    setData((d) => {
                        return { ...d, fruit: e.target.value };
                    });
                }}
            >
                <option value="Apple">APPLE</option>
                <option value="Banana">BANANA</option>
                <option value="Peach">PEACH</option>
                <option value="Grape">GRAPE</option>
            </select>
            Background Color :
            <select
                onChange={(e) => {
                    setData((d) => {
                        return { ...d, background: e.target.value };
                    });
                }}
            >
                <option value="red">RED</option>
                <option value="yellow">YELLOW</option>
                <option value="pink">PINK</option>
                <option value="purple">PURPLE</option>
            </select>
            Text Color :
            <select
                onChange={(e) => {
                    setData((d) => {
                        return { ...d, text: e.target.value };
                    });
                }}
            >
                <option value="white">WHITE</option>
                <option value="gray">GRAY</option>
                <option value="black">BLACK</option>
            </select>
        </div>
    );
}
