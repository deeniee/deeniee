// 실습01 / 배수 & 홀수

// let i = prompt('숫자를 입력해주세요');
// for (let num = 0; num <= i; num++) {
//     if (num % 13 === 0 && num % 2 === 1) {
//         console.log(num);
//     }
// }

// for (let i = 0 i <= 10000; i++) {
//     if (i % 13 === 0 && i % 2 === 1) {
//         console.log(i);
//     }
// }

// 실습02 / 구구단
for (let i = 2; i <= 9; i++) {
    console.log(`-- ${i}단 --`);
    for (let l = 1; l <= 9; ) {
        console.log(`${i} x ${l} = ${i * l}`);
        l++;
    }
}

// 실습03 / 배수의 합 구하기
let sum = 0;
// let i = 1;

// while (i <= 100) {
//     if (i % 2 == 0 || i % 5 == 0) {
//         sum += i;
//     }
//     i++;
// }
// console.log(sum);

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0 || i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);

// 실습 / for문 활용 별 찍기
// Hint 1) prompt 사용해서 높이를 입력 받기. - 10진수의 정수(int)형으로 형변환 할 것.
// Hint 2) 각 줄의 내용을 저장할 문자열 변수 만들기.
// Hint 3) 문자열(" ") 과 문자열(*)을 더한다.
// Hint 4) for문 중첩.

// const h = parseInt(prompt('원하는 높이를 입력하세요'), 10);

// 1) 입력한 만큼 높이의 별이 나오도록 세팅
// for (let i = 1; i <= h; i++) {
//     let line = ''; // 2) 각 줄의 내용을 저장할 문자열
//     // 3) 공백 추가
//     for (let j = 1; j <= h - i; j++) {
//         line = line + ' ';
//     }
//     // 4) 별 추가
//     for (let k = 1; k <= i; k++) {
//         line = line + '*';
//     }
//     console.log(line);
// }

console.log('----------');

// 실습04 / 내장 메소드 - 배열과 합
// 1~100까지 배열 만들기
let arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}
console.log(arr);

// 배열의 합 구하기 - for문
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
}
console.log(sum1);

// 배열의 합 구하기 - for...of문
let sum2 = 0;
for (let a of arr) {
    sum2 += a;
}
console.log(sum2);

// 배열의 합 구하기 - forEach 메소드
let sum3 = 0;
arr.forEach(function (a) {
    sum3 += a;
});
console.log(sum3);

// 실습05 / 내장 메소드 - 배열 활용
let fruits1 = [
    '사과',
    '딸기',
    '파인애플',
    '수박',
    '참외',
    '오렌지',
    '자두',
    '망고',
];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고'];

// same 배열
const same = fruits1.filter(function (fruit) {
    return fruits2.includes(fruit);
});
console.log('same:', same);

// diff 배열
const diff = fruits1.filter(function (fruit) {
    return !fruits2.includes(fruit);
});
console.log('diff:', diff);

// same 배열

// const same = fruits1.filter(function (fruit) {
//     for (let i = 0; i < fruits2.length; i++) {
//         if (fruit === fruits2[i]) {
//             return fruit;
//         }
//     }
// });
// console.log('same:', same);
