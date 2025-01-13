import React from 'react';
import { ThemedComponent } from './ThemedComponent';
// # 부모 컴포넌트

// prop drilling을 의도적으로 시뮬레이션 하기 위한 컴포넌트
export const ThemeMiddle = () => {
    return (
        <div style={{ padding: '10px', border: '1px solid blue' }}>
            <h3>부모 컴포넌트 (중간 다리 역할)</h3>
            <ThemedComponent></ThemedComponent>
        </div>
    );
};
