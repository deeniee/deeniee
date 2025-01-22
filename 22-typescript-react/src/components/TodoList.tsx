import React, { useState, useRef, KeyboardEvent } from 'react';
import TodoItem from './TodoItem';
import { ToDoItem } from '../types/types';

// #3. TodoList 작성 (초안 작성)

export default function TodoList() {
    const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 todo 목록
    // #4-2. todo 추가 상태
    const [newTodo, setNewTodo] = useState(''); // 새로 추가된 new Todo 하나 관리

    // #5-1. focusing
    const inputRef = useRef<HTMLInputElement>(null);
    /**
     * - 초기값으로 null 설정
     * - 초기 렌더링 시 inputRef가 아직 실제 DOM 요소를 참조하지 않아서 null로 시작함
     *
     * * <HTMLInputElement> : 참조하려는 DOM 요소의 타입을 지정
     */

    // #4-3. todo 추가 함수
    const addTodo = () => {
        const updatedTodos = [
            ...todos,
            { id: Date.now(), text: newTodo, completed: false },
        ];
        setTodos(updatedTodos);
        setNewTodo(''); // input 초기화
    };

    // #5-3.focusing 함수
    const focusInput = () => {
        inputRef.current?.focus();
    };

    // #6-2. Enter키 함수 (이벤트 데이터 타입)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    // #7-1. 토글 함수
    // - TodoItem 완료 상태 변경 함수
    const toggleComplete = (targetId: number) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === targetId
                ? { ...todo, completed: !todo.completed }
                : todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <>
            <div>
                <h1>TodoList</h1>
                <input
                    type="text"
                    placeholder="Add new todo!"
                    // #4-1. todo 추가
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    // #5-2. focus ref 객체 연결
                    ref={inputRef}
                    // #6-1. Enter키
                    onKeyDown={handleKeyDown}
                />
                <button onClick={addTodo}>ADD</button>
                <button onClick={focusInput}>FOCUS</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // #7-2. toggle 함수 props 전달
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </>
    );
}
