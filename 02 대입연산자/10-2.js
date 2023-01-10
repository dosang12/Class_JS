//사용자로부터숫자 2개를 입력받아 첫번째 입력받은 숫자가 큰지, 두번째입력 받은 수자가 큰지를 구하는 프로그램

const first = Number(prompt("첫번째숫자를 입력하세요.", "숫자"));
const second = Number(prompt("두번째숫자를 입력하세요.", "숫자"));

if (first > second) {
  alert("첫번째 수가 큽니다.");
}
if (first < second) {
  alert("두번째 수가 큽니다.");
}
if ((first = second)) {
  alert("두 수가 같습니다.");
} else {
  alert("숫자가 아닙니다.");
}
