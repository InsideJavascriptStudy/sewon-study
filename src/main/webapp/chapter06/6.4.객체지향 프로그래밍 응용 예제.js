// 6.4.1 클래스의 기능을 가진 subClass 함수
// 1. 함수의 프로토타입 체인
// 2. extend함수
// 3. 인스턴스를 생성할 때 생성자 호출(여기서는 생성자를 _init 함수로 정한다.)

// 6.4.1.1 subClass 함수 구조
// subClass는 상속받을 클래스에 넣을 변수 및 메서드가 담긴 객체를
// 인자로 받아 부모 함수를 상속받는 자식 클래스를 만든다.

var SuperClass = subClass(obj);
var SubClass = SuperClass.subClass(obj);

// 함수 subClass의 구조는 다음과 같이 구성된다.
/*
function subClass(obj){
  (1) 자식 클래스 (함수 객체) 생성
  (2) 생성자 호출
  (3) 프로토타입 체인을 활용한 상속 구현
  (4) obj를 통해 들어온 변수 및 메서드를 자식 클래스에 추가
  (5) 자식 함수 객체 변환
}
*/

// 6.2.1.2 자식 클래스 생성 및 상속
function subClass(obj) {
  // .....
  var parent = this;
  var F = function () {};
  var child = function () {};

  // 프로토타입 체이닝
  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
  child.parent = parent.prototype;
  child.parent_constructor = parent; // 6.4.1.4 생성자 호출

  // ....

  return child;
}

// 6.4.1.3 자식 클래스 확장
// 사용자가 인자로 넣은 객체를 자식 클래스에 넣어 자식 클래스를 확장
for (var i in obj) {
  if (obj.hasOwnProperty(i)) {
    child.prototypr[i] = obj[i];
  }
}
// extend() 함수의 역할

// 6.4.1.4 생성자 호출
// 클래스의 인스턴스가 생성될 떄, 클래스 내에 정의된 생성자가 호출돼야 한다.
// 부모의 생성자 역시 호출되어야 한다.
var child = function () {
  var parent = child.parent;
  //parent._init 은 _init 프로퍼티가 없으면 프로토타입 체인을 할 수 있으므로 hasOwnProperty를 사용
  if (parent.hasOwnProperty("_init")) {
    parent._init.apply(this, artuments);
  }
  if (child.prototype.hasOwnProperty("_init")) {
    child.prototype._init.apply(this, arguments);
  }
};

// instance를 생성할 때, 그 상위 클래스의 상위 클래스인 SuperClass의 생성자가 호출되지 않는다.
// >> 재귀적으로 구현할 필요가 있다. child.parent_constructor = parent;

var child = function () {
  var _parent = child.parent_constructor;
  // 현재 클래스의 부모 생성자가 있으면 그 함수를 호출한다.
  // 다만 부모가 Function인 경우는 최상위 클래스에 도달했으므로 실행하지 않는다.
  if (_parent && _parent !== Function) {
    _parent.apply(this, arguments); //부모 함수의 재귀적 호출
  }
  if (child.prototype.hasOwnProperty("_init")) {
    child.prototype._init.apply(this, arguments);
  }
};

// 6.4.1.5 subClass 보완
// parent를 this.prototype으로 지정하면 안된다.
// 최상위 클래스를 Function을 상속받는것으로 정했는데, 현재 코드에서는 처리 못함.

// var parent = this;를 수정
/*
if (this === window) {
  var parent = Function;
} else {
  var parent = this;
}
*/
var parent = this === window ? Function : this;

// subClass 안에서 생성하는 자식 클래스의 역할을 하는 함수는 subClass가 있어야 한다.
child.subClass = arguments.callee; // 현재 호출된 함수를 의미 >> subClass가 호출되고 있으므로 subClass함수를 참조

// subClass의 전체 코드
function subClass(obj) {
  var parent = this === window ? Function : this;
  var F = function () {};

  var child = function () {
    var parent = child.parent;
    if (parent.hasOwnProperty("_init")) {
      parent._init.apply(this, artuments);
    }
    if (child.prototype.hasOwnProperty("_init")) {
      child.prototype._init.apply(this, arguments);
    }
  };

  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
  child.parent = parent;
  child.subClass = arguments.callee;

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      child.prototypr[i] = obj[i];
    }
  }

  return child;
}

// 6.4.1.4. subClass활용

function subClass(obj) {
  var parent = this === global ? Function : this;
  var F = function () {};

  var child = function () {
    var _parent = child.parent_constructor;

    if (_parent && _parent !== Function) {
      _parent.apply(this, arguments); //부모 함수의 재귀적 호출
    }
    if (child.prototype.hasOwnProperty("_init")) {
      child.prototype._init.apply(this, arguments);
    }
  };

  F.prototype = parent.prototype;
  child.prototype = new F();
  child.prototype.constructor = child;
  child.parent = parent;
  child.subClass = arguments.callee;

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      child.prototype[i] = obj[i];
    }
  }

  return child;
}

var person_obj = {
  _init: function () {
    console.log("person init");
  },
  getName: function () {
    return this._name;
  },
  setName: function (name) {
    this._name = name;
  },
};

var student_obj = {
  _init: function () {
    console.log("student init");
  },
  getName: function () {
    return "studnet Name: " + this.name;
  },
};

var Person = subClass(person_obj); // Person 클래스 정의
var person = new Person(); // person init
person.setName("sewon");
console.log(person.getName()); // sewon

var Student = Person.subClass(student_obj); // Student 클래스 정의
var student = new Student(); // person init, student init 출력
student.setName("iamsewon");
console.log(student.getName()); // Student Name : iamsewon

console.log(Person.toString()); // Person이 Function을 상속받는지 확인
// function () {
//   var _parent = child.parent_constructor;

//   if (_parent && _parent !== Function) {
//     _parent.apply(this, arguments); //부모 함수의 재귀적 호출
//   }
//   if (child.prototype.hasOwnProperty("_init")) {
//     child.prototype._init.apply(this, arguments);
//   }
// }

//   6.4.1.7 subClass 함수에 클로저 적용
var F = function () {};
// F는 subCalss 함수가 호출될 때마다 생성된다. 클로저로 단 한번만 생성되게 수행
var subClass = (function () {
  var F = function () {};

  var subClass = function (obj) {
    // ....
  };
  return subClass;
})();
// 즉시 실행 함수로 새로운 컨텍스트를 만들어서 F() 함수 객체를 생성하였다.

// 6.4.2 subClass 함수와 모듈 패턴을 이용한 객체지향 프로그래밍

var person = function (arg) {
  var name = undefined;

  return {
    _init: function (arg) {
      name = arg ? arg : "sewon";
    },
    getName: function () {
      return name;
    },
    setName: function (arg) {
      name = arg;
    },
  };
};

Person = subClass(person());
var iamsewon = new Person("iamsewon");
console.log(iamsewon.getName()); // iamsewon

Student = Person.subClass();
var student = new Student("student");
console.log(student.getName()); // iamsewon
