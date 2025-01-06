import './App.css';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';
import { SayFunction } from './SayFunction';
import CounterClass1 from './250106StatePrac1';
import { CounterFunction1 } from './250106StatePrac2';

function App() {
    return (
        <div className="App">
            <CounterClass></CounterClass>
            <hr />
            <CounterFunction value={'Plus 1'}></CounterFunction>
            <hr />
            <SayFunction></SayFunction>
            <hr />
            {/* state 실습1 */}
            <CounterClass1></CounterClass1>
            <hr />
            {/* state 실습2*/}
            <CounterFunction1></CounterFunction1>
        </div>
    );
}

export default App;
