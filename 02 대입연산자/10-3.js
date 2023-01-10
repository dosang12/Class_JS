//3의 배수인지를 확인하여 결과를 alert로 출력.
let first = prompt("숫자를 입력하세요.");
//값이 입력됬을경우.
//중첩 if문
if (first !== null) {
  //첫번째 조건이 참일때 실행되는 두번째 if문

  if (first % 3 == 0) {
    alert("숫자는 3의 배수 입니다.");
  } else {
    alert("3의 배수가 아닙니다.");
  }
}
//first==null 일 경우를 의미한다.
else {
  alert("숫자를 입력해주세요.");
}
