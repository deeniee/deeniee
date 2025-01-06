import React, { useState } from 'react';

export const SayFunction = () => {
    console.log(useState('welcome')); //초기 상태 값 설정 후, 반환 값 출력 // 임시 저장 용도

    const [message, setMessage] = useState('welcome');
    // message: 현재 상태
    // setMessage(): message state 값을 바꾸는 함수

    const onClickEnter = () => {
        setMessage('안녕하세요!');
    };

    const onClickLeave = () => {
        setMessage('안녕히 가세요~');
    };

    const handleClick = () => {
        // currentMessage = 호출 시점의 message 현재 상태 값 나타냄
        // > setMessage에 함수형 업데이트를 위한 콜백함수가 전달됨
        setMessage((currentMessage) => {
            return currentMessage === 'welcome' ? '환영합니다 :)' : '반가워요';
        });
    };

    return (
        <>
            <div>SayFunction</div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={handleClick}>텍스트 바꾸기</button>
            <h1>{message}</h1>
        </>
    );
};
