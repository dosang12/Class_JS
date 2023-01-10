$(function () {
  const visual = $("#brandVisual>ul>li");
  //   visual.css("background-color", "yellow");
  const button = $("#buttonList>li");
  let current = 0; // 현재
  let btnIdx = 0; //클릭한 페이저 버튼의 인덱스
  let id; //setIntervalId
  const speed = 3000;

  //버튼클릭함수
  button.click(function () {
    btnIdx = $(this).index();
    //선택된것만 적용하기
    //1. 다 지우고 선택된 해당 요소에만 적용.
    button.removeClass("on");
    $(this).addClass("on");
    move();
    //2.
  });

  //시간마다실행
  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      if (next == visual.length) {
        next = 0;
      }
      console.log(next);
      button.eq(next).trigger("click");
    }, speed);
  }
  //이동시키는 함수
  function move() {
    if (current == btnIdx) return;
    //console.log("무브" + current);
    let cu = visual.eq(current);
    let ne = visual.eq(btnIdx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnIdx;
  }
  //clearInterval
  clearInterval();
  function clearAuto() {
    $("#brandVisual,#buttonList,.controls").mouseenter(function () {
      clearInterval(id);
    });
    $("#brandVisual,#buttonList,.controls").mouseleave(function () {
      timer();
    });
  }
  //좌우컨트롤버튼
  controls();
  function controls() {
    $(".controls .next").click(function () {
      btnIdx = btnIdx + 1;
      if (btnIdx == visual.length) {
        btnIdx = 0;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      let cu = visual.eq(current);
      let ne = visual.eq(btnIdx);
      cu.css("left", "0").stop().animate({ left: "-100%" });
      ne.css("left", "100%").stop().animate({ left: "0%" });
      current = btnIdx;
    });
    $(".controls .prev").click(function () {
      btnIdx = btnIdx - 1;
      if (current == 0) {
        btnIdx = visual.length - 1;
      }
      button.removeClass("on");
      button.eq(btnIdx).addClass("on");
      let cu = visual.eq(current);
      let pr = visual.eq(btnIdx);
      cu.css("left", "0").stop().animate({ left: "100%" });
      pr.css("left", "-100%").stop().animate({ left: "0%" });
      current = btnIdx;
    });
  }
}); //jQuery

document.addEventListener("DOMcontentLoaded", function () {
  const visual = document.querySelector("#brandVisual>ul>li");
  visual.style.backgroundColor = "white";
});
