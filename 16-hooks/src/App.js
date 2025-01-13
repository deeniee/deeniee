import './App.css';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import ProductFilter from './components/250113Prac';
import ShoppingCartApp from './components/250113Prac2';
import TodoApp from './components/250113Prac3';

import UseReducerEx from './components/UseReducerEx';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeMiddle } from './components/ThemeMiddle';
import Faq from './components/Faq';

function App() {
    return (
        <div className="App">
            {/* <UseMemoEx></UseMemoEx> */}
            {/* <UseCallbackEx></UseCallbackEx> */}
            {/* <UseCallbackEx2 postId={6}></UseCallbackEx2> */}
            {/* <hr /> */}
            {/* <ProductFilter></ProductFilter> */}
            {/* <ShoppingCartApp></ShoppingCartApp> */}
            {/* <hr /> */}
            {/* <UseReducerEx></UseReducerEx> */}
            {/* <ThemeProvider>
                <ThemeMiddle />
            </ThemeProvider> */}
            {/* <Faq></Faq> // 이거 질문하기 토글해도 제목이 바뀌지 않음*/}
            {/* <hr /> */}
            <TodoApp></TodoApp>
        </div>
    );
}

export default App;
