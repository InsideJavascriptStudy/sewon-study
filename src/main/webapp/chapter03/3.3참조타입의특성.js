// 3.3 참조 타입의 특성
// 1. 참조값이 같아야 같은 객체로 판단한다.

var objA = {
  val: 40,
};

var objB = objA;

console.log(objA.val); //40
console.log(objB.val); //40

objB.val = 50;
console.log(objA.val); //50
console.log(objB.val); //50

// 변수 objB 에 objA 값을 할당한다. objA는 우에서 생성된 객체를 가리키는 참조값을 가지고 있으므로
//  objB에도 같은 객체의 참조값이 저장된다.
//  objA>>ㄱ
//          ------val:40 >>50
//  objB>>/
//  objB가 가리키는 객체의 val 값을 50으로 변경했음
//  따라서 objA의 val 값 역시 50으로 변경된 것을 확인 할 수 있다.

// 3.3.1 객체 비교
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b); // true
console.log(objA == objB); // false
console.log(objB == objC); // true

// objA---------value:100
// objB-----ㄱ
//          ----value:100
// objC----/
// objA와 objB는 서로 다른 객체를 참조하고 있기 때문에 false

// 3.3.2 참조에 의한 함수 호출 방식
// call by value : 기본 타입
//           함수를 호출 할 때 인자로 기본 타입 값을 넘길 경우, 호출된 함수의 매개변수로 복사된 값이 전달된다.
// call by reference : 객체(참조 타입)
//           객체 값을 전달할 경우, 객체의 프로퍼티 값이 함수의 매개변수로 복사되지 않고, 참조값이 그대로 함수 내부로 전달됨.
//            >> 함수 내부에서 참조값을 이용해서 인자로 넘긴 실제 객체의 값을 변경할 수 있는 것이다.

var a = 100;
var objA = { value: 100 };
function changeArg(num, obj) {
  num = 200;
  obj.value = 200;

  console.log(num);
  console.log(obj);
}

changeArg(a, objA);
// 200
// { value: 200 }
console.log(a);
console.log(objA);
// 100 >> 값이 복사됨
// { value: 200 } >>객체 참조값이 변경됨
