// 7.3.5 반복 함수

// 7.3.5.1 each
// 배열의 각 요소 혹은 각 프로퍼티를 하나씩 꺼내서 차례대로 특정 함수에 인자로 넣어 실행
// jQuery 1.0의 each()함수

function each(obj, fn, args) {
  if (obj.length == undefined)
    for (var i in obj) fn.apply(obj[i], args || [i, obj[i]]);
  else
    for (var i = 0; i < obj.length; i++) fn.apply(obj[i], args || [i, obj[i]]);
  return obj;
}

each([1, 2, 3], function (idx, num) {
  console.log(idx + " : " + num);
});
// 0 : 1
// 1 : 2
// 2 : 3
var sewon = { name: "sewon", age: 27, sex: "female" };
each(sewon, function (idx, value) {
  console.log(idx + " : " + value);
});
// name : sewon
// age : 27
// sex : female

// obj에 length가 있는 경우와 없는 경우로 나누워서 각 요소를 인자로 하여 차례대로 함수를 호출

// 7.3.5.2 map
// 배열의 각 요소를 꺼내서 사용자 정의 함수를 적용시켜 새로운 값을 얻은 후 새로운 배열에 넣는다.
Array.prototype.map = function (callback) {
  /*
    this가 null인지, 배열인지 체크
    callback이 함수인지 체크
    */
  var obj = this;
  var value, mapped_value;
  var A = new Array(obj.length);

  for (var i = 0; i < obj.length; i++) {
    value = obj[i];
    mapped_value = callback.call(null, value);
    A[i] = mapped_value;
  }
  return A;
};

var arr = [1, 2, 3];
var new_arr = arr.map(function (value) {
  return value * value;
});

console.log(new_arr); // [ 1, 4, 9 ]

// 7.3.5.3 reduce
// 배열의 각 요소를 하나씩 꺼내서 함수를 적용시킨 뒤, 그 값을 계속해서 누적시키는 함수

Array.prototype.reduce = function (callback, memo) {
  /*
    this가 null인지, 배열인지 체크
    callback이 함수인지 체크
    */
  var obj = this;
  var value,
    accumulated_value = 0;

  for (var i = 0; i < obj.length; i++) {
    value = obj[i];
    accumulated_value = callback.call(null, accumulated_value, value);
  }
  return accumulated_value;
};

var accumulated_val = arr.reduce(function (a, b) {
  return a + b * b;
});

console.log(accumulated_val); // 14  1*1 + 2*2 + 3*3 = 14
