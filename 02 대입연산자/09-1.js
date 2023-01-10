// if else if
const date = new Date();
const hour = date.getHours();
if (hour < 11) {
  //0~10
  alert("아침먹고 학교가야지");
} else if (hour < 15) {
  //11~14
  alert("점심먹고 태권도가야지");
} else {
  alert("저녁먹고 디비자야지");
}
