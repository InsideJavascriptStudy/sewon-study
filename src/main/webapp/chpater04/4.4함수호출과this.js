// 4.4 함수 호출과 this

// 4.4.1 arguments 객체
// 함수를 호출할 때 함수 형식에 맞춰 인자를 넘기지 않더라도 에러가 발생하지 않는다.

// ex) 함수 형식에 맞춰 인자를 넘기지 않더라도 함수 호출이 가능함을 나타내는 예제 코드
function func(arg1, arg2) {
  console.log(arg1, arg2);
}

func(); //undefined undefined
func(1); //1 undefined
func(1, 2); //1 2
func(1, 2, 3); //1 2

// 정의된 함수의 인자보다 적게 함수를 호출했을 경우, 넘겨지지 않은 인자에는 undefined값이 할당
// 이 특성때문에 런타임 시에 호출된 인자의 개수를 확인하고 이에 따라 동작을 다르게 해줘야 할 경우가 있는데,
// 이를 가능하게 해 주는게 arguments 객체이다.

// arguments 객체 예제 코드
// add() 함수
function add(a, b) {
  // arguments 객체 출력
  console.dir(arguments);
  return a + b;
}

console.log(add(1));
//[Arguments] { '0': 1 }
// NaN
console.log(add(1, 2));
// [Arguments] { '0': 1, '1': 2 }
// 3
console.log(add(1, 3, 3));
// [Arguments] { '0': 1, '1': 3, '2': 3 }
// 4

// arguments
// 함수를 호출할 때 넘겨진 인자(배열 형태) : 함수를 호출할 때 첫 번째 인자는 0번 인덱스, 두 번째 인자는 1번인 인덱스,,
// length 프로퍼티 : 호출할 때 넘겨진 인자의 개수를 의미
// callee 프로퍼티 : 현재 실행 중인 함수의 참조값(예제에서는 add() 함수)

// arguments 객체는 매개변수 개수가 정확하게 정해지지 않은 함수를 구현하거나,
// 전달된 인자의 개수에 따라 서로 다른 처리를 해줘야 하는 함수를 개발하는 데 유용하게 사용할 수 있다.(배열x)

function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5, 6)); // 21

// 4.4.2 호출 패턴과 this 바인딩
// 함수를 호출할 때 arguments객체와 this인자가 암묵적으로 전달된다.

// 4.4.2.1
// 메서드 호출 사용 시 this 바인딩

var myObject = {
  name: "foo",
  sayName: function () {
    console.log(this.name);
  },
};

var otherObject = {
  name: "bar",
};

otherObject.sayName = myObject.sayName;

myObject.sayName(); // foo
otherObject.sayName(); // bar

// 4.4.2.2 함수를 호출할 때 this 바인딩
// 함수를 호출하면 this는 전역 객체에 바인딩
// 브라우저에서 실행하면 전역 객체는 window 객체가 된다.

var foo = "I'm foo";

console.log(foo); // I'm foo
// console.log(window.foo); //I'm foo

var test = "This is test";
// console.log(window.test); // This is test

var sayFoo = function () {
  console.log(this.test);
};

sayFoo(); // This is test
// sayFoo가 호출된 시점에서 this는 전역 객체인 window에 바인딩 된다.
// 때문에 this.test 는 window.test를 의미 >>This is test가 호출됨

// this 바인딩 특성은 내부함수를 호출했을때도 적용되므로 주의
var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    this.value += 1;
    console.log("func1() called this.value : " + this.value);

    func2 = function () {
      this.value += 1;
      console.log("func2() called this.value : " + this.value);

      func3 = function () {
        this.value += 1;
        console.log("func3() called this.value : " + this.value);
      };
      func3(); //func3() 내부 함수 호출
    };
    func2(); //func2() 내부 함수 호출
  },
};

myObject.func1(); // func1() 메서드 호출
// func1() called this.value : 2
// func2() called this.value : 101
// func3() called this.value : 102

// 2, 3, 4 가 나오려면 부모 함수(func1())의 this를 내부 함수가 접근 가능한 다른 변수에 저장해야 한다.
var value = 100;
var myObject = {
  value: 1,
  func1: function () {
    var that = this;
    this.value += 1;
    console.log("func1() called this.value : " + this.value);

    func2 = function () {
      that.value += 1;
      console.log("func2() called that.value : " + that.value);
      console.log("func2() called this.value : " + this.value);

      func3 = function () {
        that.value += 1;
        console.log("func3() called that.value : " + that.value);
        console.log("func2() called this.value : " + this.value);
      };
      func3(); //func3() 내부 함수 호출
    };
    func2(); //func2() 내부 함수 호출
  },
};

myObject.func1(); // func1() 메서드 호출
// func1() called this.value : 2
// func2() called that.value : 3 this.value =100
// func3() called that.value : 4 this.value =100

// 4.4.2.3 생성자 함수를 호출할 때 this 바인딩
// 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
// 함수 이름의 첫 문자를 대문자로 쓰기

// 생성자 함수가 동작하는 방식
// 1. 빈 객체 생성 및 this 바인딩
//  >> 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입의 객체로 설정
// 2. this를 통한 프로퍼티 생성
// 3. 생성된 객체 리턴

var Person = function (name) {
  this.name = name;
};

var foo = new Person("foo");
console.log(foo.name); //foo

// 객체 생성 두 가지 방법(객체 리터럴 vs 생성자 함수)
var foo = {
  name: "foo",
  age: 35,
  gender: "man",
};
console.dir(foo); //__proto__:Object

function Person(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var bar = new Person("bar", 33, "woman");
console.dir(bar); //__proto__: Person

var baz = new Person("baz", 25, "woman");
console.dir(baz); //__proto__: Person

// 객체 리터럴 방식의 경우는 자신의 프로토타입 객체가 Object(Object.prototype)
// 생성자 함수 방식의 경우는 Person(Person.prototype)

// 생성자 함수를 new를 붙이지 않고 호출할 경우
// new없이 호출하거나 일반 함수를 new를 붙여서 호출할 경우 오류가 발생할 수 있다.
// 일반 함수 호출과 생성자 함수를 호출할 때 this 바인딩 방식이 다르기 때문이다.

var qux = Person("qux", 20, "man");
console.log(qux);

// console.log(window.name); //qux
// console.log(window.age); // 20
// console.log(window.man); // man

// 4.4.2.4 call과 apply메서드를 이용한 명시적인 this 바인딩
// this를 명시적으로 바인딩 시키는 방법

function Person(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

var foo = {};

Person.apply(foo, ["foo", 30, "man"]);
console.dir(foo);
// Object   age: 30 gender: "man" name: "foo" __proto__: Object

// call 은 apply와 기능은 같지만, apply의 두번째 인자에서 배열 형태로 넘긴 것을 각각 하나의 인자로 넘긴다.
Person.call(foo, "foo", 30, "man");
console.dir(foo);
// Object   age: 30 gender: "man" name: "foo" __proto__: Object

// apply() 메서드를 활용한 arguments 객체의 배열 표준 메서드 slice()활용 코드
function myFunction() {
  console.dir(arguments);
  // arguments.shift(); //error

  var args = Array.prototype.slice.apply(arguments);
  console.dir(args);
}

myFunction(1, 2, 3);
//Arguments(3)
// 0: 1
// 1: 2
// 2: 3
//Array(3)
// 0: 1
// 1: 2
// 2: 3

// 4.4.3 함수 리턴
// 자바 스크립트 함수는 항상 리턴값을 반환한다.
// return문을 사용하지 않았더라도 규칙대로 리턴값을 전달한다.

// 규칙1. 일반 함수나 메서드는 리턴값이 없다면, undefined값이 리턴된다.
var noReturnFunc = function () {
  console.log("this function has no return statement");
};

var result = noReturnFunc();
console.log(result); //this function has no return statement  undefined

//규칙2. 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴된다.
// this로 바인딩된 새로 생성된 객체가 리턴된다.

function Person(name, age, gender, position) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  // return {name:'bar', age:20, gender:'woman'} >>명시적으로 다른 객체 반환
  return 100;
}

var foo = new Person("foo", 30, "man");
console.log(foo);
// {name:'bar', age:20, gender:'woman'} 다른 객체의 경우
//Person { name: 'foo' ,age:30 , gender:'man'} 객체가 아닌 불린, 숫자, 문자열의 경우 리턴값을 무시
