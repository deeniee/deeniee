// *내장 메소드란?
// - 프로그래밍 언어(=javascript)나 프레임워크에서 기본적으로 제공되는 메소드
// - 즉, 프로그래밍 언어의 기본 도구 (=자체적으로 제공되는 기능)
// - 따로 설치하거나 추가설정할 필요 없음

// 문자열 관련 내장 메소드 //
// - 문자열을 다루는데 유용한 기능들을 제공

let str = 'Happy Birthday';
let str2 = '   Happy Birthday   ';

console.log('str >>> ', str);
console.log('str2 >>> ', str2);

// #1. 문자열 인덱싱
console.log(str[0]);
console.log(str[6]);
console.log(str[0] + str[6] + str[11]);

// Q) Hard 만들기
console.log(str[0] + str[1] + str[8] + str[11]);
// console.log(`${str[0]}${str[1]}${str[8]}${str11]}`)
// 백틱은 변수를 출력하기 위해서만 쓰는 건 아님
// 표현식을 평가해서 그 결과 값을 문자열에 삽입할 수 있기 때문에 사용
// str[]처럼 인덱스를 사용한 문자열 접근도 하나의 표현식

// #2. 문자열의 길이(@@@length는 메소드가 아닌 속성@@@)
console.log(str.length);
console.log(str2.length);

// #3. 대소문자 변환
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// #4. 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); // 메소드 이중 사용 가능, 공백을 제거한 길이

console.log('----------');
console.log('str >>> ', str);
console.log('str2 >>> ', str2);

// #5. indexOf() : 글자 위치 찾기
// - 위치 (index) : 0부터 시작
// - 같은 문자열이 있으면 맨 처음 나오는 위치
console.log(str.indexOf('y'));
console.log(str.indexOf('i'));
console.log(str.indexOf(' '));
console.log(str.indexOf('v')); // 존재하지 않는 문자에 대해 검색하면 -1 반환
console.log(str.indexOf()); // 매개변수로 아무값이 들어가지 않으면 -1 반환

// #6. slice() : 문자열 자르기
// 음수 값이 들어가면 뒤에서부터 순서를 매김
console.log(str.slice(10)); // 10번째 위치의 글자부터 ~ 끝 글자까지 자르기
console.log(str.slice(1, 5)); // start(1)부터 ~ end-1(5)까지 자르기
console.log(str.slice(-6)); // @@@뒤에서 6번째 글자부터 ~ 끝 글자까지 자르기 @@@

console.log('----------');
console.log('str >>> ', str);
console.log('str2 >>> ', str2);

// #7. replace() 문자열 바꾸기
console.log(str.replace('p', 'w'));
console.log(str.replace('B', 'w'));
console.log(str.replaceAll('p', 'w'));

// #8. split() 문자열 쪼개기
// - 2개 이상 같은 문자열을 기준으로 쪼갤 시 >> 1개는 사라지고, 남은 문자열 수만큼 빈 문자열 ("") 생성
let str3 = 'dinner';
console.log(str3.split('e')); // ['dinn', 'r']매개변수에 해당하는 문자열이 희생되고 문자열 쪼개짐
console.log(str3.split('n')); // ['di', '', 'er'] / @@@매개변수 2개가 없어지며 빈자리가 생김 @@@

// #9. repeat
console.log(str3.repeat(4));

console.log('------------------------------');

// 배열 관련 내장 메소드 //
let arr = [1, 2, 3, 4, 5];
let arr2 = ['cat', 'dog', 'tiger', 'bear', 'monkey'];

console.log('arr >>> ', arr);
// How? 배열에 값을 추가하려면
// 6이라는 인덱스를 추가하고 싶을 때?
arr[5] = 6; // arr 배열의 5번 인덱스에 6이라는 값 추가
console.log('arr >>> ', arr);

arr[8] = 100; // 인덱스를 건너뛰면 반값(empty)이 들어감
console.log('arr >>> ', arr);

// #1. push() : 맨 끝에 요쇼 추가
arr.push(101);
arr.push(102);
console.log('arr >>> ', arr);

// #2. pop() : 맨 끝 요소 제거
arr.pop();
console.log('arr >>> ', arr);

// #3. unshift() : 맨 앞에 요소 추가
arr2.unshift('panda');
console.log('arr2 >>> ', arr2);

// #4. shift() : 맨 앞 요소 제거
arr2.shift('panda');
console.log('arr2 >>> ', arr2);

// #5. length : 배열의 길이 반환
console.log(arr.length);

// #6. includes(요소) : 요소가 있는지 없는지 검사 (true || fault 반환)
console.log(arr2.includes('panda')); // true
console.log(arr2.includes('lion')); // fault

// #7. reverse()
console.log(arr.reverse()); //역순으로 변경
console.log('arr >>> ', arr); // 이후 원본 배열도 변경됨

// #8. join() : join 안의 문자열 기준으로 문자열 병합
console.log('arr2 >>> ', arr2);
console.log(arr2.join('')); // catdogtigerbearmonkey
console.log(arr2.join('-')); // cat-dog-tiger-bear-monkey

console.log('------------------------------');

// 메소드 체이닝 //
// - 여러 메소드를 연결해서 사용할 수 있음

console.log('hello'.split(''));
console.log('hello'.split('').reverse());
console.log('hello'.split('').reverse().join(''));

// 배열에서의 반복 //
// -
// for (-) of >>> 배열의 각 요소를 뭉퉁그려 (-)로 지칭, 각 요소가 순서대로 하나씩 할당됨
