// 변수의 유효범위: scope
// 함수 내에서 선언된 함수는 함수 밖으로 나가지 못한다.
let total = ""; // 전역변수
let sum = (a, b) => {
  //let total = a + b; // 지역변수
  total = a + b; // 원래 변수에 재 할당. 같은지역내에서 같은이름으로 재선언은 불가능하다.
};
sum(10, 20);

document.write("두 수의 합" + total);

//return문의 역할 1
//값을 함수 밖으로 전달.
let sum1 = (a, b) => {
  return a + b;
};
// return은 넣지 않아도 들어가 있다.
// retrun에 값을 작성하지 않아도 undefined 를 반환함.
document.write("<hr>두 수의 합" + sum1(total, 50));
(function () {
  console.log("hello");
})();
