import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import useTheme from '../hooks/useTheme'; // 커스텀 훅 사용
// # 자식 컴포넌트 (소비)

export const ThemedComponent = () => {
    // #4. useContext 훅 사용하여 ThemeContext 값을 직접 가져와 사용.
    // const { theme, toggleTheme } = useContext(ThemeContext);

    // #(커스텀 훅 사용)
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                padding: '10px',
                textAlign: 'center',
                border: '1px solid purple',
            }}
        >
            <h3>자식 컴포넌트</h3>
            <p> 현재 테마 : {theme}</p>
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
};
