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

console.log('--------------------');

/////////////////////////////////////////
// 3. while 문
// Ex1)
let idx = 0;
while (idx < 10) {
    console.log('안녕', idx);
    // idx = idx + 1;
    idx += 1;
}
console.log('------------------');

// Ex2) 무한 루프
let idx2 = 0;
while (true) {
    // 의도적으로 무한루프
    console.log('idx2 안녕', idx2);
    idx2 += 1;

    // 무한 루프를 빠져나오는 조건
    if (idx2 === 10) {
        break;
    }
}
console.log('------------------');
// Ex3) while문 구구단
let i = 2,
    j = 1;
while (i < 10) {
    while (j < 10) {
        // console.log(i, 'x', j, '=', i * j);
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
    j = 1;
}

// Q) 1부터 20까지의 홀수 합 구하기 (while 사용)
let sum3 = 0; // 홀수의 합을 저장할 변수
let y = 1; // 초기값 설정(1부터 시작)

while (y <= 20) {
    // 조건1 y가 20 이하일 때
    if (y % 2 == 1) {
        // 조건2 y가 홀수일 때
        sum3 = sum3 + y;
    }
    y++;
}
console.log(sum3);

// Q) 10부터 1까지, 역순으로 출력하기 (while 사용)
let x = 10;
while (0 < x) {
    console.log(x);
    x--;
}

/////////////////////////////////////////
// 4. do~while문

/**
 * while문과 비슷하지만, 조건을 반복문 실행 후, 확인함
 * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사한다.
 * 즉, 항상 코드 블록을 한 번 실행한 다음 조건이 참인 동안 반복을 계속함!
 */

/**
 * do {
 *      // 실행할 코드 내용
 * } while(조건);
 */

//ex1)
let g = 1;
do {
    console.log('g >>>>', g);
    g++;
} while (g <= 5);

//ex2)
// let number;
// do {
//     number = parseInt(prompt('숫자를 입력하시오(10보다 큰 숫자)'));
// } while (number <= 10);
// console.log('입력한 숫자: ', number);
// 10보다 작은 수를 입력하면 조건을 계속해서 만족하기 때문에 prompt 반복실행 됨.

/////////////////////////////////////////
// 5. break & continue : 반복문에서 사용되는 제어문

// #break - 반복문을 완전히 중단하고 빠져나옴
// #continue - 현재 반복을 중지하고 다음 반복으로 넘어감 (이번 회차 건너뛰기)

//ex) break
for (let a = 1; a <= 10, a++; ) {
    if (a === 5) {
        break;
    }
    console.log(`a >>>> ${a}`);
}
//ex) continue
for (let a = 1; a <= 5, a++; ) {
    if (a === 3) {
        continue;
    }
    console.log(`a >>>> ${a}`);
}
