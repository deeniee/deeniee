// types/ : 타입 관련 모든 정의가 모여있는 디렉토리

// #1. interface 정의
// 단일 todo item 타입
export interface ToDoItem {
    id: number; // 유일 id
    text: string; // todo 내용
    completed: boolean; // 완료 여부
}

// generic 타입을 사용하는 Todo 아이템 type
// - 제네릭 제약 추가
//   ㄴ JSX 문법 사용하기 때문에 props로 전달되는 데이터는 react가 렌더링할 수 있는 형식이어야함 (그렇지 않다면 오류!)

// *T extends React.ReactNode
//   ㄴ T는 반드시 React.ReactNode 타입이어야한다는 의미
export interface GnToDoItem<T extends React.ReactNode> {
    id: number;
    text: T; // text 타입을 제네릭으로 정의
    completed: boolean;
}
