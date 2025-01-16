import { createContext } from 'react';

// #1. Context 생성
// -React.createContext를 호출하여 "Context 객체" 만들기
const ThemeContext = createContext();
// console.log('Themecontext >>> ', ThemeContext);

// Provider / Consumer라는 두가지 속성을 가짐
// - Provider : Context 값을 전달하는 컴포넌트
// - Consumer : Context 값을 가져오는 컴포넌트 // - useContext 훅! 대체!

export default ThemeContext;
