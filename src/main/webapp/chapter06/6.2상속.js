// 6.2 상속
// 1. 프로토타입을 이용한 상속
// 2. 클래스 기반의 상속

// 6.2.1 프로토 타입을 이용한 상속 : 객체 리터럴을 중심으로 철저히 프로토타입을 이용하여 상속을 구현

function create_object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var person = {
  name: "zzoon",
  getName: function () {
    return this.name;
  },
  setName: function (arg) {
    this.name = arg;
  },
};

var student = create_object(person);
student.setName("me");
console.log(student.getName()); // me

//extend
function extend(obj, prop) {
  if (!prop) {
    prop = obj;
    obj = this;
  }
  for (var i in prop) obj[i] = prop[i];
  return obj;
}

var added = {
  setAge: function (age) {
    this.age = age;
  },
  getAge: function () {
    return this.age;
  },
};

extend(student, added);

student.setAge(25);
console.log(student.getAge()); // 25

// 6.2.2 클래스 기반의 상속
function Person(arg) {
  this.name = arg;
}

Person.prototype.setName = function (value) {
  this.name = value;
};
Person.prototype.getName = function () {
  return this.name;
};

// 새롭게 생성된 객체를 apply 함수의 첫 번째 인자로 넘겨 Person함수를 실행시킨다.

function Student(arg) {
  Person.apply(this, arguments);
}

var you = new Person("iamsewon");
Student.prototype = you;

var me = new Student("hyewon"); // 빈 객체
// me.setName("hyewon"); // me 객체에 name property 가 생성됨 >>Student 함수 변경
console.log(me.getName()); // hyewon

//  두 클래스의 프로토타입 사이에 중개자를 하나 만들어 보기

function Person(arg) {
  this.name = arg;
}

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
};

Person.method("setName", function (value) {
  this.name = value;
});

Person.method("getName", function () {
  return this.name;
});

function Student(arg) {}

function F() {}
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;
// 자식 클래스의 prototype 객체는 빈 객체이다.
// 따라서 이곳에, 자식 클래스의 확장된 메소드와 데이터가 들어갈 수 있다.
// 각 클래스의 객체인 me와 you가 아무런 관계가 없이 독립적이다.

var me = new Student();
me.setName("sewonzzang");
console.log(me.getName()); // sewonzzang

// 즉시 실행 함수와 클로저를 활용한 상속
/* 
var inherit = (function (Parent, Child) {
  var F = function () {};
  return function (Parent, Child) {
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.super = Parent.prototype;
  };
})();
*/
