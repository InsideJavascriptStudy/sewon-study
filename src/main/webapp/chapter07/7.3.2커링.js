// 7.3.2 커링
// 커링이란 특정 함수에서 정의된 인자의 일부를 넣어 고정시키고 , 나머지를 인자로 받는 새로운 함수를 만드는 것을의미

function calculate(a, b, c) {
  return a * b + c;
}

// JavaScript에서는 curry()를 제공하지 않기 때문에 Function.prototype에 정의하여 사용
function curry(func) {
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
  };
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2, 3)); // 1 * 2 + 3 = 5
var new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3)); // 1 * 3 + 3 = 6

// 만약 1,3 번째에 저장을 하고 싶다면?
function curry2(func) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var arg_idx = 0;
    for (var i = 0; i < args.length && arg_idx < arguments.length; i++)
      if (args[i] === undefined) args[i] = arguments[arg_idx++];
    return func.apply(null, args);
  };
}

var new_func = curry2(calculate, 1, undefined, 4); //curry2를 호출할 때는 원하는 인자를 전부 넣어야 한다.
console.log(new_func(3)); // 1 * 3 + 4 = 7
