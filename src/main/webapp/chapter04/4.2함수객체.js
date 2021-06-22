// js에서는 함수도 객체다.

//함수 선언 방식으로 add()정의   [[Code]]내부 프로퍼티에 자동으로 저장된다.
function add(x, y) {
  return x + y;
}
// [[code]]------------>return x+y;
// result   ----------->5
// status   ----------->'OK'

// add()함수 객체에 result, status 프로퍼티 추가
add.result = add(3, 2);
add.status = "OK";

console.log(add.result); // 5
console.log(add.status); // OK

// 4.2.2 자바스크립트에서 함수는 값으로 취급된다.
// 함수가 가능한 동작
// 리터럴에 의해 생성
// 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
// 함수의 인자로 전달 가능
// 함수의 리턴값으로 리턴 가능
// 동적으로 프로퍼티를 생성 및 할당 가능

// 4.2.2.1 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
//변수에 함수 할당
var foo = 100;
var bar = function () {
  return 100;
};
console.log(bar()); //100

// 프로퍼티에 함수 할당
var obj = {};
obj.baz = function () {
  return 200;
};
console.log(obj.baz()); //200

// 4.2.2.2 함수 인자로 전달

// 함수 표현식으로 foo() 함수 생성
var foo = function (func) {
  func(); //인자로 받은 func() 함수 호출
};

// foo 함수 실행 //Function can be used as argument.
foo(function () {
  console.log("Function can be used as argument. ");
});

// 4.2.2.3 리턴값으로 활용
// 함수 자체가 값으로 취급되기 때문에 다른 함수의 리턴값으로도 활용할 수 있다.
// 함수를 다른 함수의 리턴값으로 활용한 코드
var foo = function () {
  return function () {
    console.log("this function is the return value.");
  };
};

var bar = foo();
bar(); // this function is the return value.

// 4.2.3 함수 객체의 기본 프로퍼티

// 4.2.3.1 length 프로퍼티
// 함수 객체의 length 프로퍼티는 모든 함수가 가져야 하는 표준 프로퍼티
// 함수가 정상적으로 실행될 때 기대되는 인자의 개수를 나타낸다.

function func0() {}
function func1(x) {
  return x;
}
function func2(x, y) {
  return x + y;
}
function func3(x, y, z) {
  return x + y + z;
}

console.log("func0.length -" + func0.length); // func0.length -0
console.log("func1.length -" + func1.length); // func1.length -1
console.log("func2.length -" + func2.length); // func2.length -2
console.log("func3.length -" + func3.length); // func3.length -3

// 4.2.3.2 prototype 프로퍼티
// 모든 함수는 객체로서 prototype 프로퍼티를 가지고 있다
// prototype 프로퍼티와 [[Prototype]]과 혼동 x

// MyFunction() 함수 정의
function myFunction() {
  return true;
}

console.log(myFunction.prototype);
// constructor: ƒ myFunction()
// __proto__: Object

console.log(myFunction.prototype.constructor);
