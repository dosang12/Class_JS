// switch
// 조건 case

let day = "금";
document.write(day + "요일에는");
switch (
  day //day가
) {
  case "월": // 월 일때는
    document.write("<br>오전 10시 수업시작");
    breack;
  case "화": // 화 일때는
    document.write("<br>오후 2시 수업시작");
    breack;
  case "수": // 수 일때는
    document.write("<br>오후 3시 수업시작");
    breack;
  case "목": // 목 일때는
    document.write("<br>오후 4시 수업시작");
    breack;
  case "금": // 금 일때는
    document.write("<br>오후 5시 수업시작");
    breack;
  //위의 조건이 아닌 것들에 대한 값을 출력. ex)else와 비슷
  default:
    document.write("월요일에서 금요일까지만 입력하세요");
}
