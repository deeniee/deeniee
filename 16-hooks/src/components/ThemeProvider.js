import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
// # 조상 컴포넌트 (제공)

// #2. Provider 컴포넌트 정의
// ThemeProvider는 자식 컴포넌트에게 ThemeContext의 값을 전달하는 역할을 한다.
export const ThemeProvider = ({ children }) => {
    // theme 상태 관리
    const [theme, setTheme] = useState('light');

    // theme 토글 함수 정의 (light/dark 모드 토글)
    const toggleTheme = () => {
        setTheme((current) => {
            return current === 'light' ? 'dark' : 'light';
        });
    };
    return (
        <div style={{ padding: '10px', border: '1px solid cyan' }}>
            {/*
                #3. .Context 객체.Provider로 감싸 하위 컴포넌트에 값 전달
                value로 전달하는 객체에는 theme 상태 값과 토글 함수가 포함.
                
            */}
            <h1>조상 컴포넌트</h1>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
            {/* 
                * 주의할 점
                - {childeren}에 포함된 모든 컴포넌트 들이 Context의 영향을 받기 때문에
                Provider의 value가 변경되면 {childeren} 내부에 있는 모든 컴포넌트들이 리렌더링됨.
                = 즉, Context는 값이 변경될 때마다 이를 구독하고 있는 모든 하위 컴포넌트를 리렌더링함.
            */}
        </div>
    );
};

// #(커스텀 훅 사용)
// useContext를 활용하여 ThemeContext의 값을 반환하는 커스텀 훅.
// export const useTheme = () => useContext(ThemeContext);
