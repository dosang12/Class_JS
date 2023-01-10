const ab = function (a) {
  //   console.log();
  a();
};

const cd = function () {
  document.write("<h1>자바스크립트에서 매개변수를 함수로 전달받는것 = 콜백함수</h1>");
};
ab(cd);
//다른 자료형 전달시 오류 발생
// ab(10);

const ab2 = function (콜백함수) {
  콜백함수(10);
};
const cd2 = function (콜백함수_매개변수) {
  document.write(`${콜백함수_매개변수}번째<br>`);
};

ab2(cd2);
