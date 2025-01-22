import React from 'react';

// interface를 사용한 props 타입 정의
// 학생 데이터를 위한 인터페이스
interface StudentData {
    name: string;
    age: number;
    major: string;
}

// 부모로부터 받을 props 타입 정의
interface StudentProps {
    data: StudentData;
    children?: React.ReactNode;
    handleClick(name: string, major: string): void;
}
export default function Students({
    data,
    children,
    handleClick,
}: StudentProps) {
    const { name, age, major } = data;
    return (
        <div onClick={() => handleClick(name, major)}>
            <h2>자식 컴포넌트</h2>
            <li>name : {name}</li>
            <li>age : {age}</li>
            <li>major : {major}</li>
            {children}
        </div>
    );
}
