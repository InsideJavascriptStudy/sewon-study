// 실행 컨텍스트(Execution context)
// 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념

// 현재 실행되는 컨텍스트에서 이 컨텍스트와 관련 없는 실행 코드가 실행되면,
// 새로운 컨텍스트가 생성되어 스택에 들어가고 제어권이 그 컨텍스트로 이동한다.

console.log("This is global context");
// This is global context

function ExContext1() {
  console.log("This is ExContext1");
}

function ExContext2() {
  ExContext1();
  console.log("This is ExContext2");
}

ExContext2();
// This is ExContext1
// This is ExContext2

//                                  ExContext1
//              >> ExContext2   >>  ExContext2
// 전역 컨텍스트    전역 컨텍스트     전역 컨텍스트

// 새로운 함수 호출이 발생하면 새로운 컨텍스트가 만들어지고 실행되며, 종료되면 반환된다.
