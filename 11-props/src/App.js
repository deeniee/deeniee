import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import MultiChild from './MultiChild';

import ClassComponent1 from './250106PropsPrac1';
import FunctionComponent1 from './250106PropsPrac2';
import ClassComponent2 from './250106PropsPrac3';

function App() {
    return (
        <div className="App">
            {/* <ClassComponent></ClassComponent>
            <hr />
            <ClassComponent place="새싹 강동캠퍼스 5층"></ClassComponent>
            <hr />
            <FunctionComponent></FunctionComponent>
            <hr />
            <FunctionComponent name="john" age={30}></FunctionComponent> */}
            {/* JSX에서 JS 표현식을 평가하는 용도로 사용하는게 {} */}
            {/* {}로 감싸야 React가 이것을 JS 숫자로 인식함. */}

            <hr />
            {/* children - 단일 자식 요소 전달 */}
            <Button link="https://www.google.com">Google</Button>
            <Button></Button>
            <hr />
            {/* children - 다중 자식 요소 전달 */}
            <MultiChild>
                <b>다중 자식</b>
                <p>요소 전달</p>
                <div>체험 해보기</div>
            </MultiChild>
            <hr />
            {/* Props 실습1 */}
            <ClassComponent1></ClassComponent1>
            <hr />
            {/* Props 실습2 */}
            <FunctionComponent1></FunctionComponent1>
            <hr />
            {/* Props 실습3 */}
            <ClassComponent2></ClassComponent2>
        </div>
    );
}

export default App;
