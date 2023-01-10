// 익명함수, 이름없는 함수

const mango = function () {
  document.write("예쁜망고<br>");
  document.write("예쁜망고<br>");
  document.write("예쁜망고<br>");
};
console.log(typeof mango);
console.log(mango, document.write);
mango();

//매개변수 있는것
//매개변수와 인수 ab,56 은 자리수를 맞춰줄것.
const sum = function (a, b) {
  let c = a + b;
  document.write(`<h1>${c}</h1>`);
};
sum(5, 6);

//즉시실행함수
//함수를 한번만 사용할때는 즉시실행을 쓰기도한다.
//자주 사용하면 선언적함수 사용
(function () {
  document.write(`<h1>매개변수 없는 즉시실행함수</h1>`);
})();

//즉시실행함수2
(function (x, y) {
  document.write(x + y);
})(10, 20);

//화살표함수,람다식
//익명함수를 줄여서 씀
// const hi = function () { 원문
const hi = () => {
  return "안녕하세요";
};
alert(hi());
//function () => {}

const hello = () => "안녕하세요";
alert(hi());

//인자가 있는 화살표 함수

let sum1 = (a, b) => a + b;
document.write("두수의 합" + sum1(10, 20));
