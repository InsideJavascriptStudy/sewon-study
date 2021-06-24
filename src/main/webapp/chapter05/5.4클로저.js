// 5.4 클로저 (closure)
// 5.4.1 클로저의 개념
function outerFunc() {
  var x = 10;
  var innerFunc = function () {
    console.log(x);
  };
  return innerFunc;
}
var inner = outerFunc();
inner(); // 10

// innerFunc가 return 됐음에도 outerFunc 변수에서 객체를 참조했기 때문에 결과값이 10으로 출력이 되었다.

// 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.
// 자유 변수(free variable) : 클로저로 참조되는 변수

function outerFunc(arg1, arg2) {
  var local = 8;
  function innerFunc(innerArg) {
    console.log((arg1 + arg2) / (innerArg + local));
  }
  return innerFunc;
}
var exam1 = outerFunc(2, 4);
exam1(2); //0.6
// innerArg > innerFunc , arg1, arg2, local > outerFunc 에서 모두 찾을 수 있다.

// 5.4.2 클로저의 활용
// 5.4.2.1 특정 함수에 사용자가 정의한 객체의 메서드 연결하기

//ex 9
function HelloFunc() {
  this.greeting = "hello";
}

HelloFunc.prototype.call = function (func) {
  func ? func(this.greeting) : this.func(this.greeting);
};

var userFunc = function (greeting) {
  console.log(greeting);
};

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call(); //hello

//ex 10
function saySomething(obj, methodName, name) {
  return function (greeting) {
    return obj[methodName](greeting, name);
  };
}

function newObj(obj, name) {
  obj.func = saySomething(this, "who", name);
  return obj;
}

newObj.prototype.who = function (greeting, name) {
  console.log(greeting + " " + (name || "everyone"));
};

var obj1 = new newObj(objHello, "zzoon");
obj1.call(); // hello zzoon

// 5.4.2.2 함수의 캡슐화
// I am xxx I live in xxx I'am xx years old
// xx를 사용자에게 인자로 입력 받기

var buffAr = ["I am ", "", ". I live in ", "", ". I'am ", "", " years old."];

function getCompletedStr(name, city, age) {
  buffAr[1] = name;
  buffAr[3] = city;
  buffAr[5] = age;

  return buffAr.join("");
}

var str = getCompletedStr("zzoon", "seoul", 16);
console.log(str);

// 다른 코드와의 충돌로 인해 버그가 생길 수 있음.
// 위는 클로저를 활용해서 buffAr을 추가적인 스코프에 넣고 사용하게 되면 해결할 수 있다.

var getCompletedStr2 = (function () {
  var buffAr = ["I am ", "", ". I live in ", "", ". I'am ", "", " years old."];
  return function (name, city, age) {
    buffAr[1] = name;
    buffAr[3] = city;
    buffAr[5] = age;

    return buffAr.join("");
  };
})();

var str = getCompletedStr2("zzoon", "seoul", 16);
console.log(str);

// 5.4.2.3 setTimeout()에 지정되는 함수의 사용자 정의
// setTimeout() : 함수 실행의 스케쥴링을 할 수 있다.

function callLater(obj, a, b) {
  return function () {
    obj["sum"] = a + b;
    console.log(obj["sum"]);
  };
}

var sumObj = { sum: 0 };

var func = callLater(sumObj, 1, 2);
setTimeout(func, 500);
// 사용자가 정의한 함수 callLater를 setTimeout함수로 호출하려면,
// 변수 func에 함수를 반환받아 setTimeout() 함수의 첫 인자로 넣어주면 된다.
// 반환받는 함수는 클로저

// 5.4.3 클로저를 활용할 때 주의사항
// 5.4.3.1 클로저의 프로퍼티값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의

function outerFunc(argNum) {
  var num = argNum;
  return function (x) {
    num += x;
    console.log("num: " + num);
  };
}
var exam = outerFunc(40);
exam(5);
exam(-10);
// exam 값을 호출할 때마다 자유변수 num 값은 계속해서 변화한다.

// 5.4.3.2 하나의 클로저가 여러 함수 객체의 스코프 체인에 들어가 있는 경우도 있다.
function func() {
  var x = 1;
  return {
    func1: function () {
      console.log(++x);
    },
    func2: function () {
      console.log(-x);
    },
  };
}

var exam = func();
exam.func1(); //2
exam.func2(); //-2

// 5.4.3.3 루프 안에서 클로저를 활용할 때는 주의하자.
function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

countSeconds(3); // 4 4 4

// 루프 i값 복사본을 함수에 넘겨준다
function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    (function (currentI) {
      setTimeout(function () {
        console.log(currentI);
      }, currentI * 1000);
    })(i);
  }
}

countSeconds(3); //1 2 3
