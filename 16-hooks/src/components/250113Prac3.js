import React, { useReducer, useState } from 'react';
import './250113Prac3.css';

const initState = { todos: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDED':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.text,
                        completed: 'yet',
                    },
                ],
            };
        case 'DONE':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, completed: 'done' }
                        : todo,
                ),
            };
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        default:
            return state;
    }
};

const TodoApp = () => {
    // 상태 관리
    const [todoText, setTodoText] = useState('');
    const [state, dispatch] = useReducer(reducer, initState);

    // 새로운 todo 추가
    const addTodo = () => {
        if (todoText.trim()) {
            dispatch({ type: 'ADDED', text: todoText });
            setTodoText(''); // 입력 필드 초기화
        }
    };
    // todo 완료 상태 토글
    const markDone = (id) => {
        dispatch({ type: 'DONE', id });
    };

    // todo 삭제
    const deleteTodo = (id) => {
        dispatch({ type: 'DELETE', id });
    };

    return (
        <div className="TodoContainer">
            <h1>Todo App</h1>
            <div className="InputArea">
                <input
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul>
                {state.todos.map((todo) => (
                    <li key={todo.id} onClick={() => markDone(todo.id)}>
                        <div
                            style={{
                                textDecoration:
                                    todo.completed === 'done'
                                        ? 'line-through'
                                        : 'none',
                            }}
                        >
                            {todo.text}
                        </div>
                        <button
                            onClick={() => {
                                deleteTodo(todo.id);
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
