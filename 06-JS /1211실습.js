// Q1)
// 다음 userInfo 객체에서 구조 분해 할당을 사용하여 name과 age를 추출하고,
// 나머지 속성은 restInfo 객체에 저장하시오.

const userInfo = {
    name: 'Lee',
    age: 25,
    job: 'Developer',
    city: 'Seoul',
};
const { name, age, job, city } = userInfo;
console.log(`name : ${name}, age : ${age}`); // name : Lee, age : 25

const restInfo = { job, city };
console.log(restInfo); // {job: 'Developer', city: 'Seoul'}

// Q2)
// 아래 두 배열을 스프레드 연산자를 사용하여 병합한 후,
// 구조 분해 할당을 이용해 첫번째와 두번째 숫자를 first와 second 변수에 저장하고,
// 나머지 숫자들을 remaining 배열에 저장하시오.

const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];

const numbers = [...evenNumbers, ...oddNumbers];
const [first, second, ...others] = numbers;

console.log(first); // 2
console.log(second); // 4

const remaining = [...others];
console.log(remaining); // [6, 1, 3, 5]

// Q3)
// Shape(직사각형) 클래스의 속성 : 가로와 세로
// Shape(직사각형) 클래스의 메소드 : getArea()
// - 넓이를 반환하는 메소드 ( = 가로 * 세로)

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); // 12

// Q4)
// 1.
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea() {
        return this.width * this.height;
    }
    getSqrt() {
        return Math.sqrt(this.width ** 2 + this.height ** 2);
    }
}
let rectangle = new Rectangle(6, 6);
console.log('rectangle의 넓이 > ', rectangle.getArea()); // 12
console.log('rectangle의 대각선 길이 > ', rectangle.getSqrt()); // 5

// 2.
class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
let triangle = new Triangle(6, 6);
console.log('triangle의 넓이 > ', triangle.getArea()); // 6

// 3.
class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height);
        this.radius = radius;
    }
    getArea() {
        return this.radius ** 2 * 3.14;
    }
}
let circle = new Circle(6, 6, 3);
console.log('circle의 넓이 > ', circle.getArea());
