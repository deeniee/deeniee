// 내장 객체 실습 - 1. 주말과 평일
let today = new Date();
let x = today.getDay;

// 1. if 문
if (0 < x < 6) {
    console.log('평일');
} else {
    console.log('주말');
}

// 2. swith문
switch (x) {
    case 0:
    case 6:
        console.log('주말');
        break;
    default:
        console.log('평일');
}

// 3. 삼항연산자
0 < x < 6 ? console.log('평일') : console.log('주말');

console.log('--------------------');
// 내장 객체 실습 - 2. 난수 생성
console.log(Math.floor(Math.random() * 11));

console.log('--------------------');

// DOM 실습 - html 내용 변경하기
const mint = document.getElementById('icecream');
const taste = document.getElementById('taste');
taste.innerHTML = '<b>맛없다...?</b>';
taste.style.color = 'red';
console.log(mint);
