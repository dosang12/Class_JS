//var i = 0;
//for(초기값; 조건식(true or false); 증감식){}
// for (i = 0; i < 7; i++) {
//   //document.write(`<br>${i}번째 반복입니다.<br>`);
// }
// //document.write(`<br>끝<br><hr>`);

// //for 문은 (){} 범위 안이 유효범위에 해당된다. 즉 아래처럼 쓰면 실행이 안됨.
// //document.write(`<br><h${6 - i}> h${6 - i}재미있는 자바스크립트 </h${6 - i}>`);

// for (i = 6; i >= 1; i--) {
//   //document.write(`<h${i}>h${i}재미있는 자바스크립트</h${i}>`);
//   //document.write("<h" + i + ">h" + i + "재미있는 자바스크립트</h" + i + ">");
// }

// 구구단 5단 만들어보기.
// let i = 5;
// for (let j = 1; j <= 9; j++) {
//   let result = "<br>" + i + "x" + j + "=" + i * j + "<br>";
//   document.write(result);
// }

let i = 5;
let j = 1;
for (j = 1; j <= 9; j++) {
  document.write(`<br>${i}x${j}=${i * j}`);
}
