import React, { useState } from 'react';

const Fruit = () => {
    const [fruit, setFruit] = useState('Apple');
    const [bgColor, setBgColor] = useState('red');
    const [textColor, setTextColor] = useState('white');
    const [input, setInput] = useState('');

    // onChange 핸들러
    const handleFruitChange = (event) => {
        setFruit(event.target.value);
    };
    const handleBgColorChange = (event) => {
        setBgColor(event.target.value);
    };
    const handleTextColorChange = (event) => {
        setTextColor(event.target.value);
    };
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    // 선택된 과일에 맞는 이미지 경로를 가져오는 함수
    const getFruitImage = () => {
        // require를 사용해 동적으로 이미지 로드
        try {
            return require(`../assets/${fruit}.jpg`);
        } catch (error) {
            console.error('이미지를 찾을 수 없습니다.', error);
            return null; // 이미지가 없으면 null 반환
        }
    };

    // 선택된 배경색을 적용하는 함수
    const getBgColor = () => {
        if (bgColor === 'red') {
            return {
                width: 'auto',
                height: '40px',
                fontSize: '20px',
                lineHeight: '40px',
                backgroundColor: 'red',
            };
        }
        if (bgColor === 'yellow') {
            return {
                width: 'auto',
                height: '40px',
                fontSize: '20px',
                lineHeight: '40px',
                backgroundColor: 'yellow',
            };
        }
        if (bgColor === 'pink') {
            return {
                width: 'auto',
                height: '40px',
                fontSize: '20px',
                lineHeight: '40px',
                backgroundColor: 'pink',
            };
        }
        if (bgColor === 'purple') {
            return {
                width: 'auto',
                height: '40px',
                fontSize: '20px',
                lineHeight: '40px',
                backgroundColor: 'purple',
            };
        }
    };

    // 선택된 글자색을 적용하는 함수
    const getTextColor = () => {
        if (textColor === 'white') {
            return { color: 'white' };
        }
        if (textColor === 'gray') {
            return { color: 'gray' };
        }
        if (textColor === 'black') {
            return { color: 'black' };
        }
    };

    return (
        <>
            <div>이벤트 종합실습</div>
            <br />
            <div>Fruit</div>
            <br />
            <div>
                <label>Fruit: </label>
                <select value={fruit} onChange={handleFruitChange}>
                    <option value="Apple">apple</option>
                    <option value="Banana">banana</option>
                    <option value="Peach">peach</option>
                    <option value="Grape">grape</option>
                </select>
                <label>Background: </label>
                <select value={bgColor} onChange={handleBgColorChange}>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="pink">pink</option>
                    <option value="purple">purple</option>
                </select>
                <label>Text: </label>
                <select value={textColor} onChange={handleTextColorChange}>
                    <option value="white">white</option>
                    <option value="gray">gray</option>
                    <option value="black">black</option>
                </select>
            </div>
            <br />
            <div>
                <input type="text" value={input} onChange={handleInputChange} />
            </div>
            <div>
                <img
                    src={getFruitImage()}
                    alt={fruit}
                    style={{ width: 'auto', height: '160px' }}
                />
            </div>
            <div style={getBgColor()}>
                <span style={getTextColor()}>{input}</span>
            </div>
        </>
    );
};

export default Fruit;
