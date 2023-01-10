// 나이계산
// let age = prompt("출생년도를 입력해주세요.");

// if (age <= 2002) {
//   alert(`${2022 - age}세 성인입니다.`);
// }

// //별모양 트리.
// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= i; j++) {
//     document.write(`*`);
//   }
//   document.write("<br>");
// }

// for (var i = 1; i <= 10; i++) {
//   for (var j = 1; j <= i; j++) {
//     if (j == 1) {
//       document.write("*");
//     } else {
//       document.write("**");
//     }
//   }
//   document.write("<br>");
// }

// //1~10까지 수에서 짝수끼리 더해서 출력.
// var k;
// var n = 10;
// var sum = 0;
// //
// for (k = 1; k <= n; k++) {
//   if (k % 2 === 1) continue; //continue-해당된 수를 건너뛴다.원래는 {}안에 들어가야 하지만 생략됨.
//   console.log(k);
//   sum += k; //sum = sum + i;
//   document.write("<br>" + sum + "<hr>");
// }

// // 선생님 방법 별트리 만들기.
// let output = "";
// for (x = 1; x < 10; x++) {
//   for (let y = 0; y < x; y++) {
//     output += "*";
//   }
//   output = output + "<br>";
// }
// document.write(output);
