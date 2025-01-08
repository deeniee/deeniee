import React, { useState } from 'react';

const Fruit = () => {
    const [fruit, setFruit] = useState('Apple');
    const [bgColor, setBgColor] = useState('white');
    const [textColor, setTextColor] = useState('black');

    // 배경색 변경 핸들러
    const handleBgColorChange = (event) => {
        setBgColor(event.target.value);
    };

    // 글자색 변경 핸들러
    const handleTextColorChange = (event) => {
        setTextColor(event.target.value);
    };

    // 과일 변경 핸들러
    const handleFruitChange = (event) => {
        setFruit(event.target.value);
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

    return (
        <>
            <div>이벤트 종합실습</div>
            <div>Fruit</div>
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
                    <option value="white">white</option>
                    <option value="gray">gray</option>
                    <option value="black">black</option>
                </select>
                <label>Text: </label>
                <select value={textColor} onChange={handleTextColorChange}>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                </select>
            </div>
            <div>
                <img
                    src={getFruitImage()}
                    alt={setFruit}
                    style={{ width: '300px', height: 'auto' }}
                />
            </div>
        </>
    );
};

export default Fruit;
