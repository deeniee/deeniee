import React from 'react';
import First from './components/First';
import Parents from './components/Parents';
import TodoList from './components/TodoList';
import GnTodoList from './components/GnTodoList';

function App() {
    return (
        <>
            {/* <First title="오늘 배울 내용은">
                <p>TS with React</p>
            </First>
            <Parents /> */}
            <TodoList />
            <GnTodoList />
        </>
    );
}

export default App;
