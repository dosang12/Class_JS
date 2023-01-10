//3항연산자를 사용하여 if문 작성해보기.

let first = prompt("숫자를 입력하세요.");

if (first !== null) {
  first % 3 == 0 ? alert("3의 배수입니다.") : alert("3의 배수가 아닙니다.");
} else {
  alert("입력이 취소되었습니다.");
}
