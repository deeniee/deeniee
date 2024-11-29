// 반복문

// 1. for문

/*
    *구문
    for([변수선언 & 초기값 설정]; [조건식(범위 지정)]; [증감식]) {
        반복시킬 코드 내용 입력
    }
*/

// Q1) 1~5 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// for (let i = 0; i < 5; i++) {
//     console.log(i + 1);
// }

// Q2) 5~1 출력
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// Q3) 1부터 n까지의 합 구하기
let n = 10;
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(i, sum);
}

console.log(sum);

console.log('--------------------');

// 2. for ~ if 중첩
// * 간단 실습
// Hint 1) 1~20까지 숫자를 반복
// Hint 2) 현재 반복 숫자가 짝수라면 (변수)에 더하기
// Hint 3) for문 안에 if문을 조합하기

// Q1) 1 ~ 20 중에서 짝수 일 때의 합을 구하기

let sum2 = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sum2 = sum2 + i;
        console.log(i, sum2);
    }
}
console.log(sum2);
