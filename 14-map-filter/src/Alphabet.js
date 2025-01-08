import Reac, { useState } from 'react';

export default function Alphabet() {
    // ex. 배열
    const [alphabet, setAlphabet] = useState(['L', 'e', 'm', 'o', 'n']);

    // ex. 배열, 안에는 객체 형태
    const [alphabets, setAlphabets] = useState([
        { id: 1, alpha: 'A' },
        { id: 2, alpha: 'P' },
        { id: 3, alpha: 'P' },
        { id: 4, alpha: 'L' },
        { id: 5, alpha: 'E' },
    ]);

    // input 데이터 상태 관리
    const [inputAlpha, setInputAlpha] = useState('');

    // #1. 글자 추가 기능
    const addAlpha = () => {
        // [Quiz1] input이 빈값이라면 alphabets 상태가 변경되지 않도록 코드 작성
        if (inputAlpha.trim().length === 0) {
            return;
        }

        // * concat
        // - (배열, 문자열)을 결합하는데 사용되는 메소드.
        // - 기존 (배열, 문자열)을 변경하지 않고,
        //   주어진 배열이나 값들을 "새로운" (배열이나 문자열)로 결합하여 반환.
        const newAlpha = alphabets.concat({
            id: alphabets.length + 1,
            alpha: inputAlpha,
        });
        setAlphabets(newAlpha);
        setInputAlpha('');
    };

    // #2. 키보드 이벤트
    const pressEnter = (e) => {
        /**
         * 한글 입력 시, 2개씩 입력되는 현상.
         * - IME(입력기) 사용 시 발생하는 현상.
         *
         * - e.nativeEvent.isComposing
         * : 입력 중인 상태를 나타내는 속성.
         *
         * e.nativeEvent.isComposing === true : 사용자가 IME으로 아직 문자 입력 중
         * e.nativeEvent.isComposing === false : 입력이 확정되어 최종 문자로 처리 가능 상태
         */
        // IME 입력 중일 때는 처리하지 않는다.
        if (e.nativeEvent.isComposing) return;

        if (e.key === 'Enter') {
            addAlpha();
        }
        if (e.keyCode === 13) {
            addAlpha();
        }
    };

    // #3. 글자 삭제 기능
    const deleteAlpha = (targetId) => {
        console.log(targetId); //targetId : 더블 클릭하여 삭제될 요소의 key (id)

        // 삭제할 ID와 일치하지 않는 애들로 새로운 배열 생성
        const newAlpha = alphabets.filter((alpha) => alpha.id !== targetId);
        setAlphabets(newAlpha);
    };

    // #4. 이벤트 위임 방식 적용
    const handleDoubleClick = (e) => {
        // 이벤트 핸들러가 <ol>요소에 설정되어 있기 때문에,
        // - 이벤트 위입을 통해 이벤트가 발생한 실제 요소가 무엇인지 확인하고,
        //   <li>인 경우에만 삭제 기능을 실행하도록 하기 위함.

        // 이벤트가 발생한 요소가 <li>인지 확인
        if (e.target.tagName === 'LI') {
            console.log('e.target >>> ', e.target);
            console.log('e.target.id >>> ', e.target.id);
            console.log('e.target.key >>> ', e.target.key); // undefined
            // 브라우저 DOM이 react 내부 속성인 key를 읽어올 수 없음!
            console.log('type : ', typeof e.target.id);
            // id 속성으로 가져오는 값은 "문자열"로 반환하기 때문에
            // 숫자로 바꿔줌
            const targetID = Number(e.target.id);
            deleteAlpha(targetID);
        }
    };

    return (
        <>
            <h1>map & filter</h1>
            <ol>
                {/* ex. 배열 */}
                {/* - return 키워드 O */}
                {/* {alphabet.map((value, idx) => {
                    return <li key={idx}>{value}</li>;
                })} */}

                {/* - return 키워드 X, 중괄호 X, */}
                {/* {alphabet.map((value, idx) => (
                    <li key={idx}>{value}</li>
                ))} */}

                {/* ex. 배열, 안에는 객체 형태 */}
                {/* {alphabets.map((value) => {
                    return <li key={value.id}>{value.alpha}</li>;
                })} */}
            </ol>
            {/* #1. 알파벳 추가하기 기능 */}
            <input
                type="text"
                placeholder="new alphabet"
                value={inputAlpha}
                onChange={(e) => setInputAlpha(e.target.value)}
                onKeyDown={pressEnter} // [Quiz2] 키보드 enter키를 누르면 입력되도록 코드 작성
            />
            <button onClick={addAlpha}>add</button>
            {/* #3. 글자 삭제 기능 */}
            <ol>
                {alphabets.map((value) => (
                    <li
                        key={value.id}
                        onDoubleClick={() => deleteAlpha(value.id)}
                    >
                        {value.alpha}
                    </li>
                ))}
            </ol>
            {/* #4. 이벤트 위임 방식 적용 */}
            <h2>이벤트 위임 방식</h2>
            <ol onDoubleClick={handleDoubleClick}>
                {alphabets.map((value) => (
                    <li key={value.id} id={value.id}>
                        {value.alpha}
                    </li>
                ))}
            </ol>
        </>
    );
}

// *concat 예제
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3); // [1, 2, 3, 4, 5, 6]
