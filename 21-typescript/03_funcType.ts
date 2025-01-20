// TS에서의 함수 선언

// #1. 기본 함수 선언
function add(a: number, b: number): number {
    return a + b;
}

// 두 매개변수 'a','b' 모두 'number' 타입. 반환값도 'number' 타입.

// #2. 선택적 매개변수
// - 선택적 매개변수 '?'는 매개변수 중 "맨 뒤"에 위치해야 함.
function print(a: number, b: number, c?: number): void {
    console.log(a);
    console.log(b);
    console.log(c);
}
// #2-2. 함수의 리턴값이 없는 함수 = void
//       ㄴ return이 없거나 단순히 작업만 수행할 때
print(2, 4, 6); // 2, 4, 6
print(2, 4); // 2, 4, undefined

// #3. 기본값 매개변수
// - 매개변수에 기본 값 할당 가능
// - 매개변수 입력을 안 받으면 기본 값 출력
function print2(a: number, b: number, c = 100): void {
    console.log('==========');
    console.log(a);
    console.log(b);
    console.log(c);
}
print2(2, 4, 6); // 2, 4, 6
print2(2, 4); // 2, 4, 100

// #4. 매개변수가 없는 함수
function sayHello(): void {
    console.log('Hello');
}
sayHello(); // Hello

// #5. void가 아닌 자료형을 리턴하는 함수
// 1.
function sayHello2(): string {
    return 'Hello2';
}
console.log(sayHello2());
// 2.
function concatString(x: string, y: string): string {
    return x + y;
}
console.log(concatString('안녕', '하세요'));
// 3.
function circleArea(r: number): number {
    return r * r * Math.PI;
}
console.log(circleArea(5));

// #6. 화살표 함수
const squareArea = (x: number, y: number): number => {
    return x * y;
};
console.log(squareArea(3, 5));

// #7. 화살표 함수에서 return 구문 생략할 때
const triangleArea = (w: string, h: string): number =>
    (parseInt(w, 10) * parseInt(h, 10)) / 2;
console.log('triangleArea >>>', triangleArea('3', '4'));

// #8. interface 정의 시 함수 타입 표현
interface Great {
    name: string;
    hi(): string;
    bye(a: number): string;
}

const sesac: Great = {
    name: 'sesac',
    hi() {
        return '여기는' + this.name + '강동캠퍼스';
    },
    bye(a: number) {
        return `작별인사를 ${a}번 했습니다`;
    },
};
// 메소드 내에서 this를 사용해 객체의 다른 속성에 접근 가능
// this.name은 현재객체(sesac)의 name속성을 참조
console.log(sesac.hi());
console.log(sesac.bye(5));

// #9. never / 함수의 끝에 절대 도달하지 않는 경우
// function goingOn(): never {
//     while (true) {
//         console.log('go!');
//     }
// }
// goingOn() // 무한
// - 무한 루프나 예외처리가 필요할 경우 never 타입을 명시해 실행되지 못하게 함

// #10. 오버라이딩 vs 오버로딩
// ** 오버라이딩
// - 클래스에서 부모 클래스의 메소드를 자식 클래스에서 "재정의"하는 개념
// - 메소드의 이름과 "매개변수 목록이 동일"하며, 자식 클래스에서 새로운 구현을 제공하여 부모 클래스의 동작을 변경.
class Animal {
    speak(): void {
        console.log('Animals make sound');
    }
}

class Dog extends Animal {
    speak(): void {
        // 오버라이딩
        super.speak(); // 부모 클래스의 speak 메소드 호출
        console.log('bark bark');
    }
}

const myDog = new Dog();
myDog.speak();

// ** 오버로딩
// - 동일한 메소드 이름을 사용하지만 "서로 다른 매개변수 목록"을 가지는 여러 함수 정의를 제공하는 것
// - 같은 기능을 여러번 사용해야할 때 사용
// ex1)
function greet(person: string): string;
function greet(person: string, age: number): string;

// 함수 구현
function greet(person: string, age?: number): string {
    if (age !== undefined) {
        return `hello, ${person}, you're ${age} years old`;
    } else {
        return `hello, ${person}`;
    }
}
console.log(greet('Bob', 30));
console.log(greet('Ellena'));

// ex2)
function sum(a: string, b: string): string; // 선언부
function sum(a: number, b: number): number; // 선언부

function sum(a: any, b: any): any {
    return a + b;
}
// 구현부
console.log(sum('가', '나'));
console.log(sum(5, 10));
