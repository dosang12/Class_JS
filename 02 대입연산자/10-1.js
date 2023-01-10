//사용자로 부터 숫자를 입력받아 짝수인지 홀수인지 숫자가 아닌지를 출력하시오.
//변수선언
//swich(자료){case 조건A: 실행A}
const input = Number(prompt("숫자를 입력하세요.", "숫자"));
//나머지가 0 false 나머지가 1 true
// switch (input % 2) {
//   case 0:
//     alert("짝수입니다");
//     break;
//   case 1:
//     alert("홀수입니다");
//     break;
//   default:
//     alert("숫자가 아닙니다");
// }

if (input % 2 == 0) {
  alert("짝수입니다");
} else if (input % 2 == 1) {
  alert("홀수입니다");
} else {
  alert("숫자가 아닙니다.");
}
