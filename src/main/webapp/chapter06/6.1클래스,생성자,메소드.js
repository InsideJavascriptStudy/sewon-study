// 객체지향 언어의 특성을 자바스크립트로 구현하는 방법
// **프로토타입을 잘 이해해야 한다.
// 6.1 클래스, 생성자, 메소드

function Person(arg) {
  this.name = arg;
  this.getName = function () {
    return this.name;
  };
  this.setName = function (value) {
    this.name = value;
  };
}

var me = new Person("zzoon"); //잘못된 내용
var you = new Person("you");
var him = new Person("him");
// >> setName과 getName을 따로 생성하고 있음. 불필요하게 중복되는 영역을 메모리에 올려놓고 사용함 >> 자원 낭비
console.log(me.getName()); // zzoon

me.setName("iamsewon");
console.log(me.getName()); // iamsewon

// >> 해결 방법: prototype
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
};

function Person(arg) {
  this.name = arg;
}
Person.method =
  ("getName",
  function () {
    return this.name;
  });
Person.method =
  ("setName",
  function (value) {
    this.name = value;
  });

var me = new Person("me");
var you = new Person("you");
console.log(me.getName()); // me
console.log(you.getName()); // you

// 클래스 안의 메서드를 정의하기
/*
Function.prototype.method = function(name , func){
    if(!this.prototype[name]){
        this.prototype[name]= func;
    }
}
*/
