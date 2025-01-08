import './App.css';
import SyntheticEvent from './SyntheticEvent'; // default로 가져와서 중괄호 없음
import { FuncComponent } from './FuncComponent';
import ClassComponent from './ClassComponent';

import HandleEx from './ex/HandleEx';
import TextColor from './ex/TextColor';
import HideShow from './ex/HideShow';
import Fruit from './ex/Fruit';

function App() {
    return (
        <div className="App">
            {/* <SyntheticEvent></SyntheticEvent>
            <hr />
            <FuncComponent></FuncComponent>
            <hr />
            <ClassComponent></ClassComponent>
            <hr /> */}
            <HandleEx></HandleEx>
            <hr />
            <TextColor></TextColor>
            <hr />
            <HideShow></HideShow>
            <hr />
            <Fruit></Fruit>
        </div>
    );
}

export default App;
