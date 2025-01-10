import React from 'react';
import Apple from '../assets/Apple.jpg';
import Banana from '../assets/Banana.jpg';
import Peach from '../assets/Peach.jpg';
import Grape from '../assets/Grape.jpg';

// #1. 정적) import 방식으로 가져와 객체에 저장
// - 파일이나 모듈을 컴파일 시점에 미리 가져옴.
// - 파일의 경로가 고정되어 있어야함.
const images1 = {
    Apple,
    Banana,
    Peach,
    Grape,
};

// #2. 동적) require 방식
// - Webpack에서 이를 지원함.
// - 런타임 시에 동적으로 단일 파일을 가져올 수 있음.
// - 파일의 경로를 동적으로 설정 가능.
// - 즉, 파일이나 폴더 경로가 변수로 지정될 때 유용.

// #3. require.context() 방식
/**
 * - Webpack에서 제공됨.
 * - 특정 디렉토리의 파일들을 자동으로 탐색, 한 번에 가져옴.
 *
 * [구문 분석]
 * require.context(directory, useSubDirectories, regExp)
 * -- directory : 탐색할 디렉토리 경로, 문자열 형태로 입력
 * -- useSubDirectories : 하위 디렉토리까지 포함할지 여부, true||false
 * -- regExp : 파일 이름을 필터링 할 정규 표현식
 */

const images3 = require.context('../assets', false, /\.(jpg|jpeg|png|svg)$/);

/**
 * . : 임의의 한 특수문자
 * \. : (.)을 일반문자로 취급하게 하여 실제 (.)을 찾음
 * ? : 앞의 글자가 있을 수도 없을 수도 있음 > 모든 경우 허락한다는 뜻
 * $ : 문자열의 끝을 의미 > .png로 끝나야만 허락한다는 뜻
 */

console.log(images3);
console.log(images3.keys());

export default function Result({ data }) {
    const { fruit, background, text, content } = data;
    return (
        <>
            <div>
                {/* 이미지 처리 */}

                {/* #1. 정적) import 방식*/}
                <img src={images1[fruit]} alt="" height={100} />

                {/* #2. 동적) require 방식*/}
                <img
                    src={require(`../assets/${fruit}.jpg`)}
                    alt=""
                    height={150}
                />

                {/* #3. require.context() 방식 */}
                <img src={images3(`./${fruit}.jpg`)} alt="" height={200} />
            </div>
            <div>
                <input
                    style={{ backgroundColor: background, color: text }}
                    value={content}
                />
            </div>
        </>
    );
}
