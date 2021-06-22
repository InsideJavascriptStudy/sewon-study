// js연산자의 대부분은 다른 언어와 유사하다.

// 주의해야 할 연산자

// 3.7.1 + 연산자
// +연산자는 더하기 연산과 문자열 연산을 수행한다.
var add1 = 1 + 2;
var add2 = "my" + "string";
var add3 = 1 + "string";
var add4 = "string" + 2;

console.log(add1); // 3
console.log(add2); // mystring
console.log(add3); // 1string
console.log(add4); // string2

// 3.7.2 typeof 연산자
// null과 배열이 'object'라는 것, 함수는 'function'이라는 것에 유의

// 3.7.3 ==(동등) 연산자와 ===(일치) 연산자
// == : 타입이 다를 경우에 타입변환을 거친 다음 비요
// ===: 타입이 다를 경우에 타입을 변경하지 않고 비교

console.log(1 == "1"); // true
console.log(1 === "1"); // false

// 대부분의 자바스크립트 코딩 가이드에서는 ===로 비교하기를 권함
// 3.7.4 !! 연산자
// !! : 피연산자를 불린값으로 변환하는 것이다.

console.log(!!0); //false
console.log(!!1); //true
console.log(!!"string"); //true
console.log(!!""); //false
console.log(!!true); //true
console.log(!!false); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!{}); //true >> 객체는 값이 비어있는 빈 객체라도 true로 변환됨!
console.log(!![1, 2, 3]); //true
