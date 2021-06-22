// 3.1.1 숫자
// js는 하나의 숫자형만 존재.
// 모든 숫자를 실수로 처리하므로 나눗셈때 주의

var num = 5 / 2;

console.log(num); //2.5
console.log(Math.floor(num)); //2
// 정수를 남기고 싶으면 math.floor 사용

// 3.1.2 문자열

// '나 "로 생성
// 한번 정의된 문자열은 변하지 않는다는 점

// str 문자열 생성
var str = "test";
console.log(str[0], str[1], str[2], str[3]); //test

// 문자열의 첫 글자를 대문자로 변경?
str[0] = "T";
console.log(str); //test

// 3.1.4 null과 undefined
// 둘다 값이 비어있음을 나타낸다.

// undefined : 기본적으로 값이 할당되지 않은 변수
// 변수 자체의 값 역시 undefined

var emptyVar;

//null 타입 변수 생성
var nullVar = null;

console.log(typeof nullVar == null); //false
console.log(nullVar == null); //true
console.log(typeof emptyVar); //undefined
