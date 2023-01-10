$(function () {
  //id 선택하기
  $("#one").css("background", "yellow"); //이렇게도 할 수 있고.
  var el1 = $("#one"); // id를 변수에 저장 후에
  el1.css("color", "red"); //변수에 css 적용 할 수도 있다.
  //태그선택
  var el2 = $("li");
  el2.css("background", "pink");
  //배열중 특정 번째만 적용
  $(el2[1]).css("color", "blue"); //$()사용해서 제이쿼리 객체로 만든다.
  el2.eq(1).css("color", "purple"); //제이쿼리 메서드를 사용해 선택
  //제이쿼리 반복문 each
  el2.each(function (a, b, c) {
    el2.eq(a).css("background", "lightgreen");
    $(b).css("color", "white");
  });
});

var el3 = $(".highlight");
el3.eq(1).css({ width: "500px", margin: "auto", background: "pink" });
