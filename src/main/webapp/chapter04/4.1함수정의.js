// 함수를 생성하는 방법 3가지
// 1. 함수 선언문
// 2. 함수 표현식
// 3. Function() 생성자 함수

// 4.1.1 함수 리터럴

// 함수 리터럴을 통한 add()함수 정의
function add(x, y) {
  return x + y;
}
// 1. function : 자바스크립트 함수 리터럴은 function 키워드로 시작
// 2. 함수명 : 식별자로 사용, 함수명은 선택사항(이름이 없는 함수를 익명함수라고 한다.)
// 3. 매개변수 리스트 : 매개변수 타입을 작성하지 않는것이 특징
// 4. 함수 몸체 : 실제 함수가 호출 되었을 때 실행되는 코드 부분

// 4.1.2 함수 선언문 방식
// 함수 선언문 방식으로 정의된 함수는 함수명이 정의되어야 한다.
console.log(add(3, 4)); //7

// 4.1.3 함수 표현식
// js에서는 함수도 하나의 값처럼 취급하기 때문에 함수도 숫자나 문자열처럼 변수에 할당가능

var add = function (x, y) {
  return x + y;
};

var plus = add;

console.log(add(3, 4)); // 7
console.log(plus(5, 6)); // 11

// add()함수를 함수 표현식 형태로 생성한 것이다.
// 함수 리터럴로 두 값을 더하는 함수를 생성한 다음 add변수에 저장
// 여기서 함수는 익명함수(anonymous function)

// add 함수 변수
//     |-------------->익명 함수(두 인자를 더하는 함수)
// plus 함수 변수

// 익명 함수 <--> 기명 함수
// 기명 함수를 사용할 때 주의할 점

var add = function sum(x, y) {
  return x + y;
};

console.log(add(3, 4)); // 7
// console.log(sum(3,4)); error

//함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근 불가능하기 때문에 error

// 그러면 어디다가 써야할까???
// >>재귀 함수에서 사용함

// ex) 함수 표현식 방식으로 구현한 팩토리얼 함수
var factorialVar = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorialVar(3)); // 6
// console.log(factorial(3));  함수 외부에서 해당 함수를 호출하지 못해 에러

// factorialVar                  factorial()함수<---
//  함수 변수----------------->factorial() 재귀 호출

// 4.1.4 Function() 생성자 함수를 통한 함수 생성하기
// 자바스크립트의 함수도 Function()이라는 기본 내장 생성자 함수로부터 생성된 객체

// ex) Function() 생성자 함수를 이용한 add() 함수 생성
var add = new Function("x", "y", "return x+y");
console.log(add(3, 4)); // 7

// 4.1.5 함수 호이스팅
add(2, 3);

function add(x, y) {
  return x + y;
}

add(3, 4);

// add(2,3) 지점에 함수가 정의되지 않았음에도 정의된 add()함수를 호출하는 것이 가능하다.
// 함수가 자신이 위치한 코드에 상관없이 함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작
// 함수 표현식 형태로 add()함수를 정의하면 add(2,3)은 error

// 함수 호이스팅이 발생하는 원인은 자바스크립트의 변수생성(Instantiation)과 초기화(Initialization)의 작업이 분리되서 진행되기 때문이다.
