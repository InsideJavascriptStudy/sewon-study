// 7.2.2 팩토리얼
// 명령형 프로그래밍 방식으로 구현
function fact(num) {
  // 재귀 호출
  if (num == 0) return 1;
  else return num * fact(num - 1);
  /** 
  var val = 1;
  for (var i = 2; i <= num; i++) {
    val = val * i;
  }
  return val;
*/
}
console.log(fact(4)); // 24

// 10!을 실행한 후에 20!을 실행한다고 하면 ... 10!을 저장해 놓으면 성능향상이지 않을까?
var fact2 = (function () {
  var cache = { 0: 1 };
  var func = function (n) {
    var result = 0;

    if (typeof cache[n] === "number") {
      result = cache[n];
    } else {
      result = cache[n] = n * func(n - 1);
    }
    return result;
  };
  return func;
})();

console.log(fact2(10)); // 3628800
console.log(fact2(20)); // 2432902008176640000

// fact2는 cache에 접근할 수 있는 클로저를 반환받는다.
// 클로저로 숨겨지는 cache에서는 팩토리얼을 연산한 값을 저장하고 있다.
// 연산을 수행하는 과정에서 캐시에 저장된 값이 있으면 곧바로 그 값을 반환

// 메모이제이션(memoization) 패턴 : 기본적으로 계산된 결과를 함수 프로퍼티값으로 담아 놓고 나중에 사용
