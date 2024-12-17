// JSON
const car = `{
"model" : "IONIQ5",
"company" : "HYUNDAI",
"year" : 2023,
"options" : ["side mirror", "smart sensor"]
}`;
console.log(car);

// 역직렬화 : JSON.parse() > 통신하여 받은 데이터를 객체로 전환
// json > js obj
const obj = JSON.parse(car);
console.log(obj); // js obj

// obj 변수는 js object이므로 . / [] 연산자 이용햐 키 값에 잡근
console.log(obj.model);
console.log(obj.options);
console.log(obj.hello); // undefined (hello 라는 키 값이 존재하지 않기 때문)

// ** 직렬화 : JSON.stringify() -> 통신하기 쉬운 포맷(JSON)으로 변환
// js obj -> json
const json = JSON.stringify(obj);
console.log(json, typeof json);

// json 변수는 JSON 형태의 "문자열(string)" 이므로
// . / [] 연산자를 이용해서 키 값에 접근이 불가능
console.log(json.model); // undefined
console.log(json.price); // undefined

// json 변수는 string 타입이므로
// string 타입에 쓸 수 있는 내장 메소드들은 쓸 수 있음.
console.log(json.split(''));
console.log(json.toUpperCase());
