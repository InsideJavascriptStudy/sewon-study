// 3.4 프로토타입
// 자바 스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
// (상속 처럼 부모객체의 프로퍼티를 자신의 것 처럼 쓸 수 있음)
//  부모 객체를 프로토타입 (객체)로 부른다.

var foo = {
  name: "foo",
  age: 30,
};

console.log(foo.toString());

console.dir(foo);
// Object
// age: 30
// name: "foo"
// __proto__:
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()

//__proto__ 프로퍼티가 있음을 확인 가능 (즉, 프로토타입 객체)
//toString()이 프로토타입에 정의되어 있기 때문에 foo.toString()이 제대로 출력이 된 것이다.
