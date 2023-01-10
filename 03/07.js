//자리배치도
//총입장객을 입력받아 좌석배치도를 출력하는 프로그램을 만드시오.

//전체입장객
var memNum = prompt("입장객은 몇명인가요?"); //td의 총 갯수
//한줄에 앉을 사람
var colNum = prompt("한 줄에 몇명씩 앉습니까?"); // tr>td의 갯수
(";/.");

var i, j, rowNum;

if (memNum % colNum === 0) {
  //tr
  rowNum = parseInt(memNum / colNum);
} else {
  rowNum = parseInt(memNum / colNum + 1);
}
document.write("모두" + rowNum + "개의 줄이 필요합니다.");

//총인원 5, 한줄에 앉을 인원 2(colNum)
document.write("<table>");
for (i = 0; i < rowNum; i++) {
  //i=tr
  //i=tr
  document.write("<tr>");
  for (j = 1; j <= colNum; j++) {
    var seatNo = i * colNum + j;
    if (seatNo > memNum) break;
    document.write("<td>좌석" + seatNo + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

// const n1="3"
// const n2="3시"
// const n3=3.8
// console.log(Number(n1)+3)
// console.log(parseInt(n1)+3)
// console.log(Number(n2)+3)
// console.log(parseInt(n2)+3)
// console.log(Number(n3)+3)
// console.log(parseInt(n3)+3)
// parseInt 선언시 문자열에서 숫자만을 추출하고 숫자가 소수점이라면 소수점이하의 수는 버린다.
