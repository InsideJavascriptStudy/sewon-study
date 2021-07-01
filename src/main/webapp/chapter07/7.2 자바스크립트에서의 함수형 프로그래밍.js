// 다음을 지원하기 때문에 자바스크립트는 함수형 프로그래밍이 가능하다.

// 일급 객체로서의 함수
// 클로저

var f1 = function (input) {
  var result;
  //암호화 작업
  result = 1;
  return result;
};

var f2 = function (input) {
  var result;
  //암호화 작업
  result = 2;
  return result;
};

var f3 = function (input) {
  var result;
  //암호화 작업
  result = 3;
  return result;
};

var get_encryped = function (func) {
  var str = "sewon";
  return function () {
    return func.call(null, str);
  };
};

var encrtyped_value = get_encryped(f1)();
console.log(encrtyped_value); // 1
var encrtyped_value = get_encryped(f2)();
console.log(encrtyped_value); // 2
var encrtyped_value = get_encryped(f3)();
console.log(encrtyped_value); // 3

// 함수가 일급 객체로 취급되기 때문에 슈도코드를 구현할 수 있다.
// 클로저에서 접근하는 변수 str은 외부에서는 접근할 수 없으므로 클로저로 함수형 프로그래밍의 개념을 정확히 구현
