// 캡슐화: 기본적으로 관련된 여러가지 정보를 하나의 틀 안에 담는 것을 의미한다.
// 응용 시 멤버 변수와 메서드가 서로 관련된 정보가 되고 클래스가 이것을 담는 하나의 큰 틀
// 정보 은닉이 가능(Information hiding)

var Person = function (arg) {
  var name = arg ? arg : "sewon";
  /*
  this.getName = function () {
    return name;
  };
  this.setName = function (arg) {
    name = arg;
  }; >>수정
  */
  return {
    getName: function () {
      return name;
    },
    setName: function (arg) {
      this.name = arg;
    },
  };
};

var me = new Person();
console.log(me.getName()); // sewon
me.setName("hyewon");
console.log(me.getName()); // hyewon
// 수정 전
console.log(me.name); // undefined
//private 멤버로 name을 선언하고 public으로 getName과 setName을 선언.
//var로 선언된 멤버들은 외부에서는 접근이 불가능하다.

// 수정 후
var me2 = Person(); // or var me2 = new Person();
console.log(me.getName()); // sewon
// 사용자가 반환받은 객체는 Person함수 객체의 프로토타입에는 접근할 수 없다는 단점이 있다.

// 보완하려면 객체를 반환하는 것이 아닌, 함수를 반환하는 것이 좋다.
var Person = (function (arg) {
  var name = arg ? arg : "sewon";
  ㅉ;

  var Func = function () {};
  Func.prototype = {
    getName: function () {
      return name;
    },
    setName: function (arg) {
      name = arg;
    },
  };

  return Func;
})();

var me = new Person();
console.log(me.getName()); // sewon
// 클로저를 활용하여 name에 접근할 수 없게 했다.
// Func이 클로저가 되고 이 함수가 참조하는 name프로퍼티가 자유 변수가 된다.
