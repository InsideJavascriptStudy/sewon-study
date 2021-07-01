// 7.3.4 래퍼
// 래퍼(wrapper) : 특정 함수를 자신의 함수로 덮어쓰는 것을 말한다.
// 객체지향 프로그래밍의 오버라이딩과 유사

function wrap(object, method, wrapper) {
  var fn = object[method];
  return (object[method] = function () {
    return wrapper.apply(
      this,
      [fn.bind(this)].concat(Array.prototype.slice.call(arguments))
      //[fn].concat... >> wrapper value : 20
    );
  });
}
Function.prototype.original = function (value) {
  this.value = value;
  console.log("value : " + this.value);
};

var mywrap = wrap(Function.prototype, "original", function (orig_func, value) {
  this.value = 20;
  orig_func(value);
  console.log("wrapper value : " + this.value);
});

var obj = new mywrap("sewon");
// value : sewon
// wrapper value : sewon
