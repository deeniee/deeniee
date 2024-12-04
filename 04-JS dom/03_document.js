console.log(document);
console.log(document.childNodes); // [<!DOCTYPE html>, html]
console.log(document.childNodes[1]); // html
console.log(document.childNodes[1].childNodes); // [head, text, body]
console.log(document.childNodes[1].childNodes[2]); // [body]; html script 태그에 defer 추가해야 나옴
// 이렇게 접근할 수도 있지만 불편함 >>> 속성과 메소드 활용
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
// * 취소선이 그어지는 이유?
// - 해당 속성의 사용을 권장하지 않거나, 더이상 지원되지 않을 가능성을 나타냄
// - 최신 보안 정책에서는 도메인 사영한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양한다.

console.log('--------------------');

// document 객체를 이용한 HTML
// #1. 요소 선택

// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClass (HTMLCollection)
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[2]);
console.log(document.getElementsByClassName('others'));

// 3. getElementsByTagName (HTMLCollection)
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('h1'));

// 4. getElementsByName (NodeList)
console.log(document.getElementsByName('id'));

console.log('--------------------');
// 5. querySelector (CSS Selector)
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

// 6. querySeclectorAll (CSS Selector) (NodeList)
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll('div')[0]);
console.log(document.querySelectorAll('div')[1]);
console.log(document.querySelectorAll('div')[2]);
console.log(document.querySelectorAll('div')[3]);
console.log(document.querySelectorAll('div')[4]);

console.log('--------------------');

// * 유사 배열 (HTMLCollection, NodeList)
// - []식으로 생긴 배열과 비슷하지만 완전히 같지 않은 객체, 배열처럼 사용은 가능함.
// - HTML 문서 내 요소들을 그룹으로 묶어 제공하는 컬렉션.
// - 배열처럼 배열의 특징인 index, length를 가짐.
// - 하지만 배열과 달리 사용 가능한 메소드가 제한적.

// #1. HTMLCollection
// - HTML 문서에서 특정 조선에 맞는 요소들을 실시간으로 컬렉션 형태로 반환.
// - 실시간 : 문서 내용이 변경되면 HTMLCollection도 즉시 업데이트.
// - HTML 요소 전용 : 컬렉션에 포함된 항목은 항상 HTML 요소.
// - 배열은 아님 : 배열처럼 index로 접근 가능하나, 배열 메소드(ex. map, forEach 등) 사용 불가

// for문으로
// console.log(document.getElementsByClassName('pink'));
const pinkElements = document.getElementsByClassName('pink');
for (let i = 0; i < pinkElements.length; i++) {
    console.log('pinkElements > ', pinkElements[i]);
}

// HTMLCollection > forEach 메소드 사용x
// 반복을 해야한다면? > Array 변경 - Array.from() 메소드 사용

// ** Array.from() 메소드
// - ES6 에서 도입된 JS 메소드
// - "유사 베열 객체"나 "반복 가능한 객체"를 실제 배열로 변환하는데 사용.
// - 또한, 배열을 생성하면서 특정 로직을 적용할 수도 있음.

// * 구문
// Array.from(arrayLike, mapFunction, thisArg)
// - arrayLike : 배열로 변환할 "유사 베열 객체"나 "반복 가능한 객체"
// - mapFunction(선택) : 새 배열의 각 요소에 대해 실행할 매핑 함수
// - thisArg(선택) : mapFunction을 실행할 때 사용할 this 값

// 1) 유사 배열 객체를 배열로 전환
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const array = Array.from(arrayLike);
console.log('array > ', array);
// 2) 문자열을 배열로 전환
const str = 'hello';
const strArray = Array.from(str);
console.log('strArray > ', strArray);
// 3) 숫자 범위 배열 생성
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log('range > ', range);
// _는 단순히 "인덱스를 이용해 배열을 생성한다"는 의도

/**
 * 매개변수 의미
 * 1. (_)
 * - 배열의 각 요소 값을 나타냄.
 * - 배열을 생성할 때 초기값은 기본적으로 undefined이므로 사용되지 않는 경우가 많음.
 * - 사용하지 않을 때는 관습적으로 _로 표현하여 '사용하지 않는 값'임을 명시.
 *
 * 2. (i)
 * - 현재 인덱스를 나타냄
 * - 배열의 각 위치에서 몇번째 요소인지 알려줌.
 */
// 4) HTMLCollection을 배열로 변환
const htmlCollection = document.getElementsByTagName('div');
const array2 = Array.from(htmlCollection);
console.log('array2 >', array2);

array2.forEach((elem) => console.log(elem)); // 진짜 배열로 변환됐기 때문에 forEach 사용 가능

// #2. NodeList
// - DOM에서 Node의 그룹을 반환. (텍스트노드, 주석노드 포함)
// - 정적 : getElementsByName,querySelectAll으로 생성한 것은 정적.
// - 실시간 : childNodes로 생성한 것은 실시간.

// NodeList > forEach 반복문 사용 가능.
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// 실습 for...of 반복문 사용
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
    console.log(pink);
}

// 모든 요소는 > 모든 노드가 될 수 있음 !but! 모든 노드는 > 모든 요소는 아님
