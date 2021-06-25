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
