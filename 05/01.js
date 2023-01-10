// //윈도우 팝업창 띄우기.
// console.log(window);
// window.open("popup.html", "배너", "width=300,height=300,left=50,top=10");
// // 윈도우창 기준으로 위치가 지정되며 브라우저 실행시 자동실행..
// // 창이 열리자마자 실행되는 함수.

function expandingWindow() {
  let winWidth = window.screen.availWidth;
  let winHeight = window.screen.availHeight;
  let sizer = window.open("", "", "left=0,top=0,scrollbar=yes");

  for (let sizeWidth = 1; sizeWidth < winWidth; sizeWidth += 10) {
    sizer.resizeTo(sizeWidth, 500);
  }
  for (let sizeHeight = 1; sizeHeight < winHeight; sizeHeight += 10) {
    sizer.resizeTo(sizeHeight, 500);
  }
  sizer.location = website;
}
//   console.log(winWidth, winHeight);
//   // availHeight 작업표시줄 뺀 화면크기 반환.
//   console.log(`화면크기 알아내기
// window: 창크기(주소창 포함여부)
//   window.outerwidth:${window.outerWidth}/
//   window.innerwidth:${window.innerWidth}/
//   screen: 모니터크기(작업표시줄)
//   screen.width:${screen.width}/
//   screen.availwidth:${screen.availWidth}/
//   `);
// }
