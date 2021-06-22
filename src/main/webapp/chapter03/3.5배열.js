// 3.5 배열
// js에서는 크기를 지정하지 않아도 되며 어떤위치에 어느타입으로 저장하더라도 에러발생 x

//3.5.1 배열 리터럴 : []대괄호 사용
/* 
var colorArr = ["orange", "yellow", "blue", "green", "red"];
console.log(colorArr[0]); //orange
console.log(colorArr[1]); //yellow
console.log(colorArr[4]); //red

// 배열 리터럴에는 각 요소의 값만을 포함

//3.5.2 배열의 요서 생성
// 동적으로 원소를 추가할 수 있다.
// js는 순차적일 필요없이 아무 인덱스에 동적으로 추가 할 수 있음

// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]); //undefined

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = "eight";
emptyArr[7] = true;

console.log(emptyArr); //[ 100, <2 empty items>, 'eight', <3 empty items>, true ]
console.log(emptyArr.length); //8
// js의 배열의 크기는 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정한다.

// 3.5.3 배열의 length 프로퍼티
// length 프로퍼티는 배열 내에 가장 큰 인덱스에 1을 더한 값이다.

var arr = [];
console.log(arr.length); //0

arr[0] = 0;
console.log(arr.length); //1
arr[1] = 1;
console.log(arr.length); //2
arr[2] = 2;
console.log(arr.length); //3
arr[100] = 100;
console.log(arr.length); //101
// 배열의 length는 101이지만 실제 메모리는 length크기만큼 할당되지 않는다.

var arr = [0, 1, 2];
console.log(arr.length); //3

arr.length = 5;
console.log(arr); //[ 0, 1, 2, <2 empty items> ]  <2 empty items>:undefined(실제 메모리가 할당되지는 않음)

arr.length = 2;
console.log(arr); //[ 0, 1 ]
console.log(arr[2]); //undefined

// 3.5.3.1 배열 표준 메서드와 length 프로퍼티
// 배열 메서드는 length 프로퍼티를 기반으로 동작

// arr배열 생성
var arr2 = ["zero", "one", "two"];

// push() 메서드 호출
arr2.push("three");
console.log(arr2); //[ 'zero', 'one', 'two', 'three' ]

// length 값 변경 후, push() 메서드 호출
arr2.length = 5;
arr2.push("four");
console.log(arr2); //[ 'zero', 'one', 'two', 'three', <1 empty item>, 'four' ]

// 3.5.4 배열과 객체
// 배열과 객체의 유사점과 차이점

// colorsArray 배열
var colorsArray = ["orange", "yellow", "green"];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

// colorsObj 객체
var colorsObj = {
  0: "orange",
  1: "yellow",
  2: "green",
};
console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

// typeof 연산자 비교
console.log(typeof colorsArray); //object
console.log(typeof colorsObj); //object

// length 프로퍼티
console.log(colorsArray.length); //3
console.log(colorsObj.length); //undefined

// 배열 표준 베서드
colorsArray.push("red");
console.log(colorsArray[3]); //red
// colorsObj.push("red"); error

// colorsObj는 배열이 아님. Object.prototype 객체가 프로토타입
// colorsArray는 배열로 Array.prototype 객체가 프로토타입

var emptyArray = [];
var emptyObj = {};

console.dir(emptyArray.__proto__); //Object(0) []
console.dir(emptyObj.__proto__); //[Object: null prototype] {}
*/
// 3.5.5 배열의 프로퍼티 동적 생성

// 배열 생성
var arr = ["zero", "one", "two"];
console.log(arr.length); //3

// 프로퍼티 동적 원소 추가
arr.color = "blue";
arr.name = "number_array";
console.log(arr.length); //3

// 배열 원소 추가
arr[3] = "red";
console.log(arr.length); //4

// 배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경된다.

// 배열 객체 출력
console.dir(arr); //[ 'zero', 'one', 'two', 'red', color: 'blue', name: 'number_array' ]

// 3.5.6 배열의 프로퍼티 열거
// for in문으로 프로퍼티를 열거한다고 설명헀다.
// for in을 사용하게 되면 불필요한 프로퍼티가 출력될 수 있으므로 되도록이면 for문을 사용한다.

for (var prop in arr) {
  console.log(prop, arr[prop]);
  // 0 zero
  // 1 one
  // 2 two
  // 3 red
  // color blue
  // name number_array
}

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  // zero
  // one
  // two
  // red
}

// 3.5.7 배열 요소 삭제
// delete 연산자를 사용해 배열 요소 삭제

var arr = ["zero", "one", "two", "three"];
delete arr[2];
console.log(arr); //[ 'zero', 'one', <1 empty item>, 'three' ]
console.log(arr.length); //4

// 배열에서 요소들을 완전히 삭제할 경우 splice() 배열 메서드 사용
arr.splice(2, 1); //2번째 요소부터 1개를 삭제한다.
console.log(arr); //[ 'zero', 'one', 'three' ]
console.log(arr.length); //3

//3.5.8 Array() 생성자 함수
// 생성자 함수로 배열과 같은 객체를 생성할 때는 반드시 new 연산자를 같이 써야 한다.
// Array()생성자 함수는 호출할 때 인자 개수에 따라 동작이 다르므로 주의해야 한다.
// 1. 호출할 때 인자가 1개이고, 숫자일 경우: 호출된 인자를 length로 갖는 빈 배열 생성
// 2. 그 외의 경우: 호출된 인자를 요소로 갖는 배열 생성

var foo = new Array(3);
console.log(foo); //[ <3 empty items> ]
console.log(foo.length); //3
// foo의 경우 3이라는 숫자 인자 1개만 넘겼으므로, 3개의 요소가 있는 빈 배열 생성

var bar = new Array(1, 2, 3);
console.log(bar); //[ 1, 2, 3 ]
console.log(bar.length); //3
// bar의 경우 그 외의 경우로 1,2,3 세 개의 숫자가 요소인 배열이 생성

// 3.5.9 유사 배열 객체
// length 프로퍼티는 배열의 동작에 있어서 중요한 프로퍼티이다.
// 일반 객체에 length라는 프로퍼티가 있다면? >>유사 배열 객체라고 부른다.(array-like-object)

var arr = ["bar"];
var obj = {
  name: "foo",
  length: 1,
};

arr.push("baz");
console.log(arr); //[ 'bar', 'baz' ]

// 배열이 아니므로 error
// obj.push("baz");

// 유사 배열 객체도 배열 메서드를 사용하는 것이 가능하다. >>4장에서 더 자세히
var arr = ["bar"];
var obj = { name: "foo", length: 1 };

arr.push("baz");
console.log(arr); //[ 'bar', 'baz' ]

Array.prototype.push.apply(obj, ["baz"]);
console.log(obj); //{ '1': 'baz', name: 'foo', length: 2 }
