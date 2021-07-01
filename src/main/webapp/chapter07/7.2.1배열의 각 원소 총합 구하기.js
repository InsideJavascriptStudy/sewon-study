// 7.2.1 배열의 각 원소 총합 구하기
function sum(srr) {
  var len = arr.length;
  var i = 0,
    sum = 0;
  for (; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}

var arr = [1, 2, 3, 4];
console.log(sum(arr)); // 10

// 곱한 값 구현
function multiply(srr) {
  var len = arr.length;
  var i = 0,
    result = 1;
  for (; i < len; i++) {
    result *= arr[i];
  }
  return result;
}

var arr = [1, 2, 3, 4];
console.log(multiply(arr)); // 24

// 함수형 프로그래밍으로 구현하면 여러번 구현할 필요없이 쉽게 가능
function reduce(func, arr, memo) {
  var len = arr.length;
  i = 0;
  accum = memo;
  for (; i < len; i++) {
    accum = func(accum, arr[i]);
  }
  return accum;
}
var sum2 = function (x, y) {
  return x + y;
};
var multiply2 = function (x, y) {
  return x * y;
};

console.log(reduce(sum2, arr, 0)); // 10
console.log(reduce(multiply2, arr, 1)); // 24

// reduce() : 함수와 배열을 인자로 넘겨받고 루프를 돌면서 함수를 실행
// 결과값을 accum에 계속해서 저장
