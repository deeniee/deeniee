// # Generic
// - 선언할 때 타입을 지정하기 어려운 케이스가 존재
// - 데이터 타입을 외부에서 지정
// - 생성 시점에 타입을 명시함
// => "재사용성", "유연성" 증가
// => 타입을 변수처럼 사용함
// - 주로 <T> 형태로 사용함

// ex1)
function numArrlen(arr: number[]): number {
    return arr.length;
}
console.log(numArrlen([1, 2, 3]));

// ex2)
function strArrlen(arr: string[]): number {
    return arr.length;
}
console.log(strArrlen(['1', '2', '3', '4']));

console.log('----------');
// ex1) & ex2)처럼 모든 타입에 대해 배열의 길이을 ㄹ검사하는 함수를 타입ㅁ마다 만들지 않기 위해서 제너릭 사용

// #1. 제너릭 기본 사용법
// <T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듦.
// -> type만 들어올 수 있음
function arrLen<T>(arr: T[]): number {
    return arr.length;
}
console.log(arrLen<string>(['1', '2', '3', '4']));
console.log(arrLen<number>([1, 2, 3, 4, 5]));
console.log(arrLen<string | number>([1, 'two', 'tree', 4, 'five', 'six']));

// 실습1)
function printSome<T>(x: T, y: T) {
    console.log(x, y);
}
printSome<string>('hi', 'hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false]);

// #2. 두개의 서로 다른 타입 매개변수 제너릭
// * 관례일 뿐
// T : type
// U : usually
function printSome2<T, U>(x: T, y: U) {
    console.log(x, y);
}
printSome2<number, string>(1, 'one');

// ##############################################

// #3. interface와 제너릭
// ex1)
interface Phone<T> {
    company: string;
    createdAt: Date;
    option: T;
}

type iphoneOption = {
    color: string;
    storage: number;
};

const iphone20: Phone<iphoneOption> = {
    company: 'Apple',
    createdAt: new Date('2025-01-22'),
    option: { color: 'red', storage: 256 },
};
console.log(iphone20);

// ex2>
type galexyOption = {
    color: string;
    withBuz: boolean;
};

const galexy25: Phone<galexyOption> = {
    company: 'Samsung',
    createdAt: new Date('2025-01-22'),
    option: { color: 'blue', withBuz: true },
};
console.log(galexy25);
