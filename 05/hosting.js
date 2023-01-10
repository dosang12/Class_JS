var x = 10; // 변수 x를 초기화 한다.
function display() {
  document.write("x is" + x);
  var y = 10;
  document.write("y is" + y);
}
var y = 20;
display();
console.log(y);

Exam(); // B
var Exam1 = function () {
  //익명함수는 선언전에 호출하면 undefinded가 나온다.
  alert("A");
};

function Exam() {
  //명명함수
  alert("B");
}
Exam1(); // A
//명명함수가 먼저 실행된 다음에 익명함수가 실행된다.

// var과 선언적함수는 호이스팅 발생(당근마켓=끌어올리기)
// es6 에서 개선되어 나온것이 const,let 이다.
// 익명함수는 호이스팅 발생.
