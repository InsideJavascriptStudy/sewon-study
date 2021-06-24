// 활성 객체와 변수 객체
// 스코프 체인

function execute(param1, param2) {
  var a = 1,
    b = 2;
  function func() {
    return a + b;
  }
  return param1 + param2 + func();
}

execute(3, 4);

// 1. 활성 객체 생성
// 활성 객체 : 실행 컨텍스트가 생성되면 자바스크립트 엔진은 해당 컨텍스트에서 실행에 필요한 여러 가지 정보를 담을 객체를 생성
// 엔진 내부에서 접근할 수 있다는 것이지 사용자가 접근할 수 있다는 것은 아니다.

// 2. arguments 객체 생성
// 활성 객체는 arguments 프로퍼티로 이 arguments 객체를 참조한다.

// execute()함수의 param1,param2가 들어왔을경우의 활성객체의 상태 ..
// arguments >> [param1, param2]

// 3. 스코프 정보 생성
// 현재 컨텍스트의 유효 범위를 나타내는 스코프 정보를 생성한다.
// 연결리스트와 유사한 형식. 현재 컨텍스트에서 특정 변수에 접근해야 할 경우, 이 리스트를 활용
// 상위 실행 컨텍스트의 변수도 접근 가능

// [[scope]] >> [List]

// 현재 생성된 활성 객체가 스코프 체인의 제일 앞에 추가되며, execute() 함수의 인자나 지역 변수 등에 접근할 수 있다.

// 4. 변수 생성
// 현재 실행 컨텍스트 내부에서 사용되는 지역 변수의 생성이 이루어진다.

//param1:value param2:value a:undefined b:undefined func >> Function Object

// 5. this 바인딩

// this >> Object

// 활성 객체 (=변수 객체)
// arguments >> [param1, param2]
// [[scope]] >> [List]
// param1:value param2:value
// a:undefined b:undefined
// func >> Function Object
// this >> Object

// 6. 코드 실행
