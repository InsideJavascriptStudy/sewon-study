// 각각의 함수는 [[scope]] 프로퍼티로 자신이 생성된 실행 컨텍스트의 스코프 체인을 참조한다.
// 이 실행 컨텍스트는 실행된 함수의 [[scope]]프로퍼티를 기반으로 새로운 스코프 체인을 만든다.

// 5.3.1 전역 실행 컨텍스트의 스코프 체인
var var1 = 1;
var var2 = 2;
console.log(var1);
console.log(var2);

// [[scope]] > 0 전역 객체

// 5.3.2 함수를 호출한 경우 생성되는 실행 컨텍스트의 스코프 체인

var var1 = 1;
var var2 = 2;
function func() {
  var var1 = 10;
  var var2 = 20;
  console.log(var1);
  console.log(var2);
}
func();
console.log(var1);
console.log(var2);

// func() 함수를 실행하였으므로 새로운 컨텍스트가만들어진다(func)

// [[scope]]>>1.func 변수 객체 0.전역 객체
//  (var1과 var2는 func변수 객체를 먼저 탐색하고, 없으면 전역 객체를 탐색한다.)

var value = "value1";
function printFunc() {
  var value = "value2";
  function printValue() {
    return value;
  }
  console.log(printValue());
}
printFunc(); //"value2"

var value = "value1";
function printValue() {
  return value;
}
function printFunc(func) {
  var value = "value2";
  console.log(func());
}
printFunc(printValue); //value1
