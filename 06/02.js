var el1 = document.getElementById("one");
console.log(el1);
el1.style.background = "yellow";
// var el2 = document.getElementsByTagName("li");
// console.log(el2);
//값이 여러개이기 때문에
// el2[1].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png";
// el2[1].style.backgroundSize = "20px";
// el2[1].style.backgroundRepeat = "no-repeat";

var el2 = document.getElementsByTagName("li");
for (i = 0; i < 3; i++) {
  el2[i].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png";
  el2[i].style.backgroundSize = "20px";
  el2[i].style.backgroundRepeat = "no-repeat";
  el2[i].style.paddingLeft = "20px";
}
// for (i = 3; i < 7; i++) {
//   el2[i].style.background = "skyblue";
// }

// var el3 = document.getElementsByTagName("ul");
// for (var e of el3) {
//   e.style.background = "skyblue";
// }

//클래스 선택
var el4 = document.getElementsByClassName("highlight");
el4[1].style.cssText = "width:500px; margin:auto; background:pink;";
//css 속성 여러개 -> 추가X, 수정됨 (기존 속성들은 다 지워진다.)

//querySelector
var el5 = document.querySelector(".highlight");
console.log(el5); //단일 요소만 반환
el5.style.color = "red";

var el6 = document.querySelectorAll(".highlight");
for (j = 0; j < 3; j++) {
  el6[j].style.color = "orange";
}

for (a of el6) {
  a.style.background = "lightgreen";
}

el6.forEach(function (b) {
  b.style.fontSize = "3em";
});

el6[1].style.fontSize = "24px";
