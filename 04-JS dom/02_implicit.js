// JS 표준 내장 객체
// - 기본적으로 미리 정의된 객체, 모든 JS 환경에서 사용할 수 있는 객체들을 말한다.
// - 자주 사용되는 기능들을 미리 구현해놓은 것

// #1. Date 객체: 시간, 날짜

// 날짜 생성하여 저장
let now = new Date();
console.log(now);

// new Date(TimeStamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);

let jan_02_1970 = new Date(24 * 3600 * 1000); // 24시간
console.log(jan_02_1970);
// 타임스탬프(TimeStamp)
// - 특정 시점의 날짜와 시간을 "숫자로 표현한 값"
// - 보통 "에포크" 이후의 시간을 초 또는 밀리초 단위로 시간을 나타냄
// Q) 에포크(Epoch)?
// - 특정 시간의 기준점.
// - 1970년 1월 1일 09:00:00 UTC를 기준.
//      Why? 1970년 1월 1일 09:00:00?
//      1. 역사적인 이유
//        - 유닉스 os에서 타임스탬프를 처음 정의할 때 사용한 날짜.(유닉스 시스템이 등장한 시점)
//        - 당시 컴퓨터 시스템의 기준 시간으로 설정된 것
//      2. 기술적인 편리성
//        - 시간을 숫자로 표현하여 수학적으로 계산하기가 편리함

// new Date(date_string)
let date = new Date('2024-12-04');
console.log('date > ', date); // date >  Wed Dec 04 2024 09:00:00 GMT+0900 (한국 표준시)
let date2 = new Date('2024', '12', '04'); // MM(0~11) : 1월~12월
console.log('date2 > ', date2); // Sat Jan 04 2025 00:00:00 GMT+0900 (한국 표준시)

// * 관련 메소드
// - 객체 점 접근법
// getDate() : '월'의 몇번째 날인지 반환
// getDay() : '주'의 몇번째 날인지 반환 (0부터 시작)
// getMonth() : 몇번째 월인지 반환 (0부터 시작)
// getHours() : 시간을 반환 (0부터 23까지)
// getMinutes() : 분을 반환 (0부터 59까지)
// getSeconds() : 초을 반환 (0부터 59까지)
// getMillisesons() : 밀리초를 반환 (0부터 999까지)
// getTime() : 1970년 1월 1일부터 현재까지의 밀리초 단위 시간을 반환

console.log(now.getFullYear()); // 2024;
console.log(now.getMonth()); // 11;
console.log(now.getDate()); // 4;
console.log(now.getDay()); // 3; 0부터 시작하므로 3은 수요일; 0: 일요일 ~ 6: 토요일
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

console.log('--------------------');

// #2. Math 객체
// - 수학적인 상수와 함수

// * 속성
console.log(Math.E); // 2.718281828459045; 자연로그
console.log(Math.PI); // 3.141592653589793; 파이
console.log(Math.SQRT2); // 1.4142135623730951; 2의 재곱근 = 루트

// * 메소드
console.log(Math.min(100, -2, 0, 5)); // -2; 최소값
console.log(Math.max(100, -2, 0, 5)); // 100; 최대값
console.log(Math.round(5.245)); // 5; 반올림
console.log(Math.round(5.754)); // 6; 반올림
console.log(Math.ceil(5.245)); // 6; 강제 올림
console.log(Math.floor(5.754)); // 5; 강제 내림
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10));

// 0 ~ 10
console.log(Math.floor(Math.random() * 11));

// Quiz1) 1 ~ 100
console.log(Math.ceil(Math.random() * 99));
console.log(Math.floor(Math.random() * 100) + 1);

// Quiz2) 20 ~ 22
console.log(Math.round(Math.random() * 2 + 20));
console.log(Math.floor(Math.random() * 3 + 20));

console.log(
    Math.floor('2' + Math.random() * 3),
    typeof Math.floor('2' + Math.random() * 3),
);
