// import logo from './logo.svg';
import './App.css';
import image from './assets/IMG_8326.jpg';

/**
 * /src/assets 폴더 생성
 * : React 컴포넌트 내부에서 사용되는 이미지, 아이콘 등 정적 파일 저장.
 * - ex) 배경 이미지, 버튼 아이콘, 프로필 이미지 등
 * - "import"키워드로 불러와야함.
 *
 * /public
 * : HTML 파일에 직접 삽입되거나, 빌드 과정 없이 원본 파일 그대로 사용되어야 하는 파일 저장.
 * = index.html에 직접 사용하는 파일들.
 * - ex. 파비콘, 로고, 웹폰트 등
 **/

function App() {
    const name = 'damon';
    const student = 'sesac';

    const checkPerson = () => {
        if (name === 'damon') {
            return '리더';
        } else if (name === 'john') {
            return '학생';
        } else {
            return '모르는 사람';
        }
    };

    const styles = {
        backgroundColor: 'skyblue',
        color: 'blue',
        fontSize: '30px',
    };
    return (
        <div className="App">
            {/* JSX 문법*/}
            {/* #1. 하나로 감싸인 요소 */}
            {/* 의미없는 div가 싫다면 -- <></> fragment 문법 */}
            <>
                <h1> JSX 문법</h1>
            </>
            {/* #2. js 문법 사용 가능 */}
            {/* - {}로 감싸면 js 표현식 사용 가능
                - {} 안에서 삼항 연산자 사용 가능 (if, for문 사용 불가) */}
            <div>{name} 안녕</div>
            <div>
                {student === 'sesac' ? (
                    <span>새싹크루</span>
                ) : (
                    <span>누구시죠?</span>
                )}
            </div>
            {/* #2-1. 복잡한 조건을 사용하고 싶다면?
                함수를 작성해 사용*/}
            <h4>{checkPerson()}</h4>
            {/* #2-2. 조건에 따른 렌더링 ( && )
               조건이 참일 때만 측정 요소를 랜더링할 때*/}
            <h5>{name === 'damon' && '안녕하세요'}</h5>
            {/* #3. style 속성 */}
            {/* - react에서 DOM요소에 스타일 적용시 문자열 x > 객체 사용!
                - {{스타일 명: 값;}}
                - 스타일 이름 중 하이픈 포함시 camelCase로 작성해야함. ex.backgroundColor

            */}
            <div style={styles}>인라인 스타일 적용</div>
            <div
                style={{
                    backgroundColor: 'lightpink',
                    color: 'red',
                    fontSize: '30px',
                }}
            >
                직접 인라인 스타일 적용
            </div>
            {/* #4. className 사용 */}
            {/* - class 속성이 아닌 className 속성 사용 */}
            {/* #4-1. html에서는 함수를 "호출", jsxㅇ에서는 함수를 "선언" */}
            <button
                onClick={() => {
                    console.log('hello');
                }}
            >
                버튼
            </button>

            {/* #5. 종료태그가 없는 태그 사용시*/}
            {/* - 기존의 종료태그가 없는 태그 종류
                - <input /> or <input></input> 등으로 작성 필수*/}

            {/* #6. 주석 */}
            {/* - // : jsx 외부 주석 */}
            {/* - {* *} : jsx 내부 주석 */}

            <br />
            {/* /경로가 public폴더이다. */}
            <img src="/logo192.png"></img>

            {/* scr 내부의 이미지를 사용할 경우 > 맨 위에서 이미지를 import 해오기 */}
            <img src={image} />
        </div>
    );
}

export default App;

////// JSX 실습 1

// function App() {
//     const name = '누피';
//     const animal = '강아지';
//     return (
//         <h2>
//             제 반려 동물 이름은 <u>{name}</u>입니다.
//             <br />
//             <u>{name}</u>는 <u>{animal}</u>입니다.
//         </h2>
//     );
// }

// export default App;

////// JSX 실습 2

// function App() {
//     return <h2> {3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</h2>;
// }

// export default App;

////// JSX 실습 3

// function App() {
//     const a = 7;
//     const b = 3;

//     return (
//         <div className="App">
//             <div>{a > b && 'a가 b보다 큽니다'}</div>
//         </div>
//     );
// }

// export default App;

////// JSX 실습 4

// function App() {
//     const title = 'Hello World!';

//     return (
//         <div className="App">
//             <div className="App-title">{title}</div>
//             <div>
//                 ID : <input />
//             </div>
//             <div>
//                 PW : <input />
//             </div>
//         </div>
//     );
// }
// export default App;
