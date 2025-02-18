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
import Form from './components/react-hook-form/Form';
import FormPrac from './components/react-hook-form/250115Prac';

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
            {/* <Faq></Faq> */}
            {/* <hr /> */}
            <TodoApp></TodoApp>
            {/* <hr /> */}
            {/* <Form></Form> */}
            {/* <FormPrac></FormPrac> */}
        </div>
    );
}

export default App;
