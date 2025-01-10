// 수업에서 같이 작성한 실습 코드

import React, { useState } from 'react';

export default function FruitPrac() {
    const [fruit, setFruit] = useState('Apple.jpg');
    const [bgColor, setBgColor] = useState('red');
    const [textColor, setTextColor] = useState('white');
    const [input, setInput] = useState('');

    const fruitChange = (e) => {
        setFruit(e.target.value);
    };
    const bgColorChange = (e) => {
        setBgColor(e.target.value);
    };
    const textColorChange = (e) => {
        setTextColor(e.target.value);
    };
    function inputTyping(e) {
        setInput(e.target.value);
    }

    return (
        <>
            <div>
                Fruit :
                <select onChange={fruitChange}>
                    <option value="Apple.jpg">apple</option>
                    <option value="Banana.jpg">banana</option>
                    <option value="Peach.jpg">peach</option>
                    <option value="Grape.jpg">grape</option>
                </select>
                Background Color :
                <select onChange={bgColorChange}>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="pink">pink</option>
                    <option value="purple">purple</option>
                </select>
                Text Color :
                <select onChange={textColorChange}>
                    <option value="white">white</option>
                    <option value="gray">gray</option>
                    <option value="black">black</option>
                </select>
            </div>
            <div>
                Text :
                <input type="text" onChange={inputTyping} />
            </div>
            <div>
                <img src={fruit} alt="" height={200} />
            </div>
            <div style={{ backgroundColor: bgColor, color: textColor }}>
                {input}
            </div>
        </>
    );
}
