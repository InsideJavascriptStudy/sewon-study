// 4.3 함수의 다양한 형태
// 4.3.1 콜백 함수
// 함수의 이름을 지정하지 않아도 되는 익명함수의 대표적인 용도

// ex) 이벤트 핸들러 처리, 웹 페이지 로드, DOM이벤트 발생 시...
// html에서 실행
// window.onload = function () {
//   alert("This is the callback function");
// };

// 4.3.2 즉시 실행 함수

(function (name) {
  console.log("This is the immediate function->" + name);
})("foo");

// This is the immediate function->foo

// 1.함수 리터럴을 괄호()로 둘러싼다.
// 2.다음 함수가 바로 호출될 수 있게 ()괄호 쌍을 추가한다.

// 최초 한번의 실행만을 필요로 하는 초기화 코드 부분 등에 사용할 수 있다.
// jQuery와 같은 자바스크립트 라이브러리나 프레임워크 소스들에서 사용

// ex)jQuery에서 사용된 즉시 실행 함수
// (function(window, undefined){})(window);
// jQuery에서 즉시 실행 함수를 사용하는 이유는 자바스크립트의 변수 유효 범위특성 때문이다.
// 라이브러리 코드를 즉시 실행 함수에 정의해두게 되면 라이브러리 내의 변수들은 접근 x
// 라이브러리들이 동시에 로드가 되더라도 라이브러리간 변수 충돌같은 문제를 방지

// 4.3.3 내부 함수
// 함수 내부에 정의된 함수
// 자바스크립트의 기능을 보다 강력하게 해주는 클로저를 생성하거나
// 부모 함수 코드에서 외부에서의 접근을 막고 독립적인 헬퍼 함수를 구현 하는 용도 등

// parent()함수 정의
function parent() {
  var a = 100;
  var b = 200;

  //child()내부 함수 정의
  function child() {
    var b = 300;

    console.log(a);
    console.log(b);
  }
  child();
}

// parent(); //100 300
// child();//error 함수 내부에 선언된 변수는 함수 외부에서 접근이 불가능하다. 이 규칙은 내부 함수도 적용

// 내부 함수에서는 자신을 둘러싼 부모 함수의 변수에 접근이 가능하다.
// 변수 b는 child()함수에 선언이 되어 있으므로 parent() 함수의 b변수가 아닌 child()의 b값이 출력

// 함수 스코프 밖에서는 함수 스코프 안에 선언된 모든 변수나 함수에 접근이 불가능하다.
// 스코프 체이닝 때문에, 함수 내부에서는 함수 밖에서 선언된 변수나 함수의 접근이 가능하다.

// 부모 함수에서 내부 함수를 외부로 리턴하면, 부모 함수 밖에서도 내부 함수를 호출하는 것이 가능하다.

function parent() {
  var a = 100;
  // child() 내부 함수
  var child = function () {
    console.log(a);
  };

  // child() 함수 반홤
  return child;
}

var inner = parent();
inner(); //100

// 4.3.4 함수를 리턴하는 함수
// 함수도 일급 객체이므로 일반 값처럼 함수 자체를 리턴할 수 있다.
// 함수를 호출함과 동시에 달느 함수로 바꾸거나, 자기 자신을 재정의하는 함수를 구현 가능

// self() 함수
var self = function () {
  console.log("a");
  return function () {
    console.log("b");
  };
};

self = self(); //a 'a'가 출력된다.
//  다시 self 함수 변수에 self()함수 호출 리턴값으로 내보낸 함수가 저장됨.
self(); //b
// 위에서 self()함수 호출 후에, self 함수 변수가 가리키는 함수가
// 원래 함수에서 리턴 받은 새로운 함수로 변경됐기 때문이다.
