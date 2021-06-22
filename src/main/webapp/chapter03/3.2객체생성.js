// 3.2자바 스크립트 참조 타입(객체 타입)
//      숫자, 문자열, 불린, null, undefined 같은 기본타입을 제외한 모든 값
//      배열, 함수, 정규표현식 등이 해당

//      key(이름):value(값) 형태 >>Hash와 비슷

// 3.2.1객체 생성
//  1. Objcct() 객체 생성자 함수를 이용
//  2. 객체 리터럴 이용
//  3. 생성자 함수를 이용

// 3.2.1.1 Object() 생성자 함수

// Object()를 이용해서 foo빈 객체 생성
var foo = new Object();

// foo객체 프로퍼티 생성
foo.name = "foo";
foo.age = 30;
foo.gender = "male";

console.log(typeof foo); //object
console.log(foo); //{ name: 'foo', age: 30, gender: 'male' }

// 3.2.1.2 객체 리터럴 방식 이용
//         리터럴 : 표기법 >> 객체 리터럴 : 객체를 생성하는 표기법
//         중괄호{} 를 이용해서 객체를 생성
var foo2 = {
  name: "foo",
  age: 30,
  gender: "male",
};

console.log(typeof foo2);
console.log(foo2);

// 3.2.1.3 생성자 함수 이용 >> 4장
