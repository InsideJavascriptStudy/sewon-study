// 7.3.3 bind
// bind는 커링 기법을 활용한 함수.
// curry와 다른점은 함수를 호출할 때 this에 바인딩 할 객체를 사용자가 넣어줄 수 있다는 점
// 특정 함수에 원하는 객체를 바인딩시켜 새로운 함수를 사용할 때 사용

var print_all = function (arg) {
  for (var i in this) console.log(i + " : " + this[i]);
  for (var i in arguments) console.log(i + " : " + arguments[i]);
};

var myobj = { name: "sewon" };

var myfunc = print_all.bind(myobj);
myfunc(); // name : sewon myobj객체를 this에 바인딩시켜서 print_all()

var myfunc1 = print_all.bind(myobj, "iamhyewon", "others");
myfunc1("insidejs");
// name : sewon
// 0 : iamhyewon
// 1 : others
// 2 : insidejs
