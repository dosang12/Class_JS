// // $("선택자") = document.querySelector()
// const h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "blue"; // 2. const를 사용한 축약문.
// //한번에 하나씩만 가능하다.
// // 제이 쿼리의 $("선택자").css({"color","red","background-color":"yellow"}) 와 같은의미.

// var heading = (document.querySelector("h1").onclick = function () {
//   document.querySelector("h1").style.backgroundColor = "green";
// }); // 1. 원문.

// 조건문

var your_sex = "여자";
document.write("당신은" + your_sex + "이므로");
//if(조건){조건이 참일때 실행할 실행문.}

if (your_sex == "남자") {
  document.write("반바지를 입으세요.");
}
if (your_sex == "여자") {
  document.write("긴바지를 입으세요.");
}

//현재시간이 18시 이전이면 해를 출력, 18시 이후면 달을 출력.
let current = new Date();
let day_time = current.getHours() + 9;
if (day_time < 18) {
  document.write(`<img src="day.gif" style="display:block;margin:0 auto">`);
}
if (day_time >= 18) {
  document.write(`<img src="night.gif" style="display:block;margin:0 auto">`);
}
if (day_time >= 18) {
  document.write(`<body style="background-color:gray;">`);
}

//미션 해보기.
var score = prompt("시험 점수를 입력하세요");
if (score >= 70) {
  document.write("합격입니다.");
}
//70점 이상 아닌경우. else는 조건이 없다. if문이 false인 경우 모두 다.
else {
  document.write("불합격입니다.");
}
