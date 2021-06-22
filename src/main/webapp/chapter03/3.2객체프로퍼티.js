// 3.2.2 객체 프로퍼티 읽기/쓰기/갱신
// 객체는 새로운 값을 가진 프로퍼티를 생성, 읽거나 원하는 값으로 갱신이 가능하다.

// 대괄호[] 표기법
// 마침표. 표기법

// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
  name: "foo",
  major: "computer science",
};

// 객체 프로퍼티 읽기
console.log(foo.name); //foo
console.log(foo["name"]); //foo
console.log(foo.nickname); //undefined

// 객체 프로퍼티 갱신
foo.major = "electronics engineering";
console.log(foo.major); //electronics engineering
console.log(foo["major"]); //electronics engineering

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age); //30

// 대괄호 표기법만을 사용해야 할 경우
// -문자가있을 때 대괄호 표기법을 사용하지 않으면 -연산자로 인식되기 때문에 주의해야함
foo["full-names"] = "foo bar";
console.log(foo["full-names"]); //foo bar
// console.log(foo.full - names);error
console.log(foo.full); //undefined
// console.log(names); error

// 마침표 표기를 사용하면 NaN값이 나옴
// NaN(Not a Number) : 수치 연산을 해서 정상적인 값을 얻지 못할 경우
console.log(1 - "hello"); // 숫자- 문자열 이기 때문에 NaN

// 3.2.3 for in문과 객체 프로퍼티 출력

// 객체 리터럴을 통한 foo 객체 생성
var foo = {
  name: "foo",
  age: 30,
  major: "computer science",
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
  console.log(prop, foo[prop]);
  //age 30
  //major computer science
  //name foo
}

// 3.2.4 객체 프로퍼티 삭제
// delete 연산자를 이용해 즉시 삭제 가능
// 객체의 프로퍼티를 삭제할 뿐 객체 자체는 삭제 불가능

// 객체 리터럴을 통한 foo 객체 생성
var foo = {
  name: "foo",
  nickname: "babo",
};

console.log(foo.nickname); //babo
delete foo.nickname;    //delete연산자로 프로퍼티 삭제
console.log(foo.nickname); //undefined

delete foo; //객체 자체의 삭제는 불가능
console.log(foo.name);  //foo
