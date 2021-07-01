// 7.2.3 피보나치 수열
// 메모이제이션 기법 적용

var fibo = (function () {
  var cache = { 0: 0, 1: 1 };

  var func = function (n) {
    if (typeof cache[n] === "number") {
      result = cache[n];
    } else {
      result = cache[n] = func(n - 1) + func(n - 2);
    }
    return result;
  };
  return func;
})();

console.log(fibo(10)); // 55

// 함수형 프로그래밍으로 구현
var cacher = function (cache, func) {
  var calculate = function (n) {
    if (typeof (cache[n] === "number")) {
      result = cache[n];
    } else {
      result = cache[n] = func(calculate, n);
    }
    return result;
  };
  return calculate;
};
var fact = cacher({ 0: 1 }, function (func, n) {
  return n * func(n - 1);
});
var fibo2 = cacher({ 0: 0, 1: 1 }, function (func, n) {
  return func(n - 1) + func(n - 2);
});

console.log(fact(10));
console.log(fibo2(10));
