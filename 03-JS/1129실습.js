// 자료형 object 변수 선언 실습 (실습01)

const female = {
    name: '성춘향',
    age: 16,
};

const male = {
    name: '이몽룡',
    age: 18,
    like: ['강아지', '고양이'],
    isMarried: true,
    girlfriend: female,
};

console.log(male);

console.log('------------');

// 점수 평균 만들기 실습 (실습02)
let mathScore = 77;
let engScore = 88;

let avgScore = (Number(mathScore) + Number(engScore)) / 2;

console.log(avgScore);

console.log('------------');

// 함수 만들기1 실습 (실습03)

function multifly(num1, num2) {
    return `${Number(num1) * Number(num2)}`;
}
console.log(multifly(3, 7));
console.log(multifly(2, 2));

console.log('------------');

// 함수 만들기2 실습 (실습04)

const square = function square(num3) {
    return `${Number(num3) ** 2}`;
};

console.log(square(4));
console.log(square(11));
console.log(square(5));

console.log('------------');

// 조건문 실습1 : if문 (실습05)

function ageClass() {
    let userAge = prompt('나이를 입력해주세요');

    if (userAge >= 20) {
        return '성인';
    } else if (userAge >= 17) {
        return '고등학생';
    } else if (userAge >= 14) {
        return '중학생';
    } else if (userAge >= 8) {
        return '초등학생';
    } else if (userAge >= 0) {
        return '유아';
    }
}

const result = ageClass();
console.log(result);

console.log('------------');

// 조건문 실습2 : 삼항연산자 (실습06)

let now = new Date().getHours();

now < 12 ? console.log('오전') : console.log('오후');
