/**
 * 함수형 프로그래밍 : 함수의 조합으로 작업을 수행함을 의미
 * 변할 수 있는 것은 오로지 함수 뿐 ( 연산의 대상이 됨)
 */

// 순수 함수 (Pure function) :f1, f2, f3
// >> 외부에 아무런 영향을 미치지 않는 함수
// f1 = encrypt1; f2= encrypt2; f3 = encrypt3;

// 고계 함수(Higher-order function) :get_encryped
//  >> 함수를 또 하나의 값으로 간주하여 함수의 인자 혹은 반환값으로 사용할 수 있는 함수
// pure value = 'zzzz'; encrtyped_value=get_encryped(x);

// 내부 데이터 및 상태는 그대로 둔 채 제어할 함수를 변경 및 조합함으로써
// 원하는 결과를 얻어내는 것이 함수형 프로그래밍의 중요한 특성이다.
