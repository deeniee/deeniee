"use strict";
// only TS Type
// #1. Tuple
// - 튜플은 고정된 개수의 요소를 가짐.
// - 각 요소의 타입이 미리 지정된 배열로, 각 요소의 순서가 중요하며 순서에 따라 타입이 다를 수 있음.
// [ 튜플 타입 선언]
let drink;
// [ 튜플 값 할당]
drink = ['color', 1];
// [ 튜플 타입 선언과 값 할당 동시에 하는 방법]
let drink2 = ['coke', 'pepsi'];
// 튜플의 데이터를 변경할 때에도, 베열의 데이처를 변경했던 것 처럼 인덱스로 접근.
// 또한, 배열의 일부 메소드들도 사용 가능.
drink2[0] = 'zeroCoke';
drink2[1] = 'fanta';
console.log('drink2 >>> ', drink2);
drink2.push('good');
console.log('drink2 >>> ', drink2); // 튜플의 한계
/**
 * (!)튜플의 숨겨진 한계
 * : 길이와 타입이 정해진 것 처럼 보이지만, push 메소드가 동작하므로 정의가 깨짐.
 *  ㄴ 튜플이라 고정된 개수가 변하면 안되는데 변해버림.
 *
 * - 이와 같이 타입 시스템의 의도에 어긋나는 동작을 방지하고자 한다면,
 *   readonly 키워드나 as const를 사용하여, 튜플을 불변으로 만들 수 있음.
 */
// [readonly]
// - 요소의 타입 순서와 길이를 완벽히 고정
// - 일부 배열 메소드 사용 가능 (복사본 생성 시 정도)
let drink3 = ['cider', 2000];
// drink3.push('hello'); // Error
console.log('drink3 >>> ', drink3);
// [as const]
// - 해당 튜플은 불변상태가 됨.
// - 모든 배열 메소드 사용 불가
let drink4 = ['cider', 4000]; // 암묵적 추론으로 각각 타입을 알아서 판단
// drink4.push('hello'); // Error
console.log('drink4 >>> ', drink4);
// 튜플 나머지 연산자
let restTuple = ['david', 10, 20, 30];
// ...spread 연산자는 항상 마지막에 작성해야함.
console.log('restTuple >>> ', restTuple);
// nodemon --ext ts --exec ts-node [파일이름.ts]
// ################
// #2. Enum
// - 이넘을 사용하는 이유?
// - 1) 분야별 종류를 정의하여 명확하게 사용하기 위함
//      ㄴ 사용자 권한 분야만 따로 모아서 정의(열거)
//      ㄴ
// [숫자값 지정 가능]
// - #1. enum은 기본적으로 0부터 1씩 증가하는 값을 가짐.
var Auth;
(function (Auth) {
    Auth[Auth["admin"] = 0] = "admin";
    Auth[Auth["nser"] = 1] = "nser";
    Auth[Auth["guest"] = 2] = "guest";
})(Auth || (Auth = {}));
console.log(Auth);
var Menu;
(function (Menu) {
    Menu[Menu["pizza"] = 4000] = "pizza";
    Menu[Menu["pasta"] = 5000] = "pasta";
    Menu[Menu["chicken"] = 5001] = "chicken";
})(Menu || (Menu = {}));
console.log(Menu);
// #3. 문자열 지정 가능
var Cafe;
(function (Cafe) {
    Cafe["americano"] = "\uC544\uBA54\uB9AC\uCE74\uB178";
    Cafe["latte"] = "\uCE74\uD398\uB77C\uB5BC";
})(Cafe || (Cafe = {}));
console.log(Cafe);
console.log(Cafe.americano);
console.log(Cafe.latte);
// #3-2.  문자열&숫자 혼합 지정 가능
var Cake;
(function (Cake) {
    Cake[Cake["chocolate"] = 0] = "chocolate";
    Cake[Cake["matcha"] = 3000] = "matcha";
    Cake[Cake["vanilla"] = 3001] = "vanilla";
    Cake["mango"] = "mango cheese cake";
})(Cake || (Cake = {}));
console.log(Cake);
// #4. js 객체와의 차이
/**
 * ##1. 양방향 매핑
 * - "키"를 통해 값을 찾을 수 있음.
 * - "값"를 통해 키를 찾을 수 있음
 *
 * 'TS'의 'enum'은 js로 컴파일될 때, 양방향 매핑 지원을 위해 변환.
 * 이 변환 과정에서 'enum'의 값과 키가 모두 포함돤 객체가 생성되며, 로그에 양방향 매핑이 포함된 형태로 출력됨.
 *
 * ##2. enum은 한 번 생성되면, 속성 추가 및 수정 불가
 *
 * ##3. enum은 속성값으로 문자열 & 숫자만 할당 가능
 */
// ex)
var Food;
(function (Food) {
    Food[Food["pizza"] = 4000] = "pizza";
    Food[Food["pasta"] = 5000] = "pasta";
    Food[Food["burger"] = 2000] = "burger";
})(Food || (Food = {}));
console.log(Food.pasta); // 5000
console.log(Food[5000]); // pasta
