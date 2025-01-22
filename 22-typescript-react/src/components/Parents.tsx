import React from 'react';
import Students from './Students';

// 학생 데이터
const studentData = {
    name: 'Ellie',
    age: 18,
    major: 'computer science',
};

const handleClick = (name: string, major: string): void => {
    console.log(`My name is ${name} and my major is ${major}`);
};
export default function Parents() {
    return (
        <div>
            <h1>부모 컴포넌트</h1>
            <Students data={studentData} handleClick={handleClick}>
                <p>자식 컴포넌트의 children 영역</p>
            </Students>
        </div>
    );
}
