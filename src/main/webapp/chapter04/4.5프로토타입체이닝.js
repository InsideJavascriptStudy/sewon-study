// 4.5. 프로토타입 체이닝

// 4.5.1 프로토타입의 두 가지 의미
function Person(name) {
  this.name = name;
}
var foo = new Person("foo");

console.dir(Person);
// Person(name) name: "Person" prototype: {Person __proto__: Object }
console.dir(foo);
// Personname: "foo"__proto__: Object

// 4.5.2 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝

// 프로토타입 체이닝 : 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 [[Prototype]]링크를 따라
// 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것]

var myObject = {
  name: "foo",
  sayName: function () {
    console.log("My name is " + this.name);
  },
};

myObject.sayName(); //My name is foo
console.log(myObject.hasOwnProperty("name")); //true
console.log(myObject.hasOwnProperty("nickName")); //false
// myObject.sayNickName(); //error
// hasOwnProperty() : 인자로 넘긴 문자열 이름의 프로퍼티나 메서드가 있는지 체크하는 자바스크립트 표준 API 함수

// 4.5.3 생성자 함수로 생성된 객체의 프로토타입 체이닝

// "자바 스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를
//  자신의 프로토타입 객체(부모 객체)로 취급한다."

function Person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

var foo = new Person("foo", 30, "tennis");

console.log(foo.hasOwnProperty("name")); //true

console.dir(Person.prototype);
//Object
// constructor: ƒ Person(name, age, hobby)
// __proto__: constructor: ƒ Object()

// 4.5.4 프로토타입 체이닝의 종점
// Object.prototype 객체는 프로토타입 체이닝의 종점이다.
// 모든 자바스크립트 객체는 프로토타입 체이닝으로 Object.prototype 객체가 가진 프로퍼티와 메서드가 접근하고,
// 서로 공유가 가능하다는 것을 알 수 있다.

// 4.5.5 기본 데이터 타입 확장
// 숫자, 문자열, 배열 등에서 사용되는 표준 메서드들의 경우, Number.prototype, String.prototype, Array.prototype 정의되어 있다.
// 이러한 기본 내장 프로토타입 객체 또한 Object.prototype을 자신의 프로토타입으로 가지고 있어서 프로토타입 체이닝으로 연결.

// String 기본 타입에 메서드 추가
String.prototype.testMethod = function () {
  console.log("this is the String.prototype.testMethod()");
};

var str = "this is test";
str.testMethod(); // this is the String.prototype.testMethod()

// 위에서 생성한 testMethod() 메서드가 추가되어 있다는 것을 확인할 수 있다.
console.dir(String.prototype); //String  testMethod: ƒ ()

// 4.5.6 프로토타입도 자바스크립트 객체다.
// 프로토타입 객체 역시 자바스크립트 객체이므로 일반 객체처럼 동적으로 프로퍼티를 추가/삭제가 가능

function Person(name) {
  this.name = name;
}

var foo = new Person("foo");

//foo.sayHello(); //error

Person.prototype.sayHello = function () {
  console.log("hello");
};

foo.sayHello(); //hello

// 4.5.7 프로토타입 메서드와 this 바인딩

function Person(name) {
  this.name = name;
}

//getName() 프로토타입 메서드
Person.prototype.getName = function () {
  return this.name;
};

var foo = new Person("foo");

console.log(foo.getName()); // foo

//Person.prototype 객체에 name 프로퍼티 동적 추가
Person.prototype.name = "person";

console.log(Person.prototype.getName()); // person

// 4.5.8 디폴트 프로토타입은 다른 객체로 변경이 가능하다.
// 디폴트 프로토타입 객체를 다른 일반 객체로 변경하는 것이 가능하다 >> 객체지향의 상속을 구현한다.

// 생성자 함수의 프로토타입 객체가 변경되면, 변경된 시점 이후에 생성된 객체들은
// 변경된 프로토타입 객체로 [[Prototype]] 링크를 연결한다는 점을 기억해야 한다.
function Person(name) {
  this.name = name;
}
console.log(Person.prototype.constructor); //[Function: Person(name)]

var foo = new Person("foo");
console.log(foo.country); //undefined

Person.prototype = {
  country: "korea",
};
console.log(Person.prototype.country); //korea

var bar = new Person("bar");
console.log(foo.country); //undefined
console.log(bar.country); //korea
console.log(foo.constructor); //[Function : Person(name)]
console.log(bar.constructor); //[Function : Object()]

// 4.5.9 객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다.
// 프로퍼티가 해당 객체에 없는 경우 프로토타입 체이닝이 일어난다.
// 반대로 객체에 있는 특정 프로퍼티에 값을 쓰려고 한다면 이때는 프로토타입 체니잉이 일어나지 않는다.

function Person(name) {
  this.name = name;
}

Person.prototype.country = "Korea";

var foo = new Person("foo");
var bar = new Person("bar");
console.log(foo.country); // Korea
console.log(bar.country); // Korea
foo.country = "USA";

console.log(foo.country); // USA
console.log(bar.country); // Korea
