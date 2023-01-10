// addEventListener("load", function () {
//   var bt = document.querySelector("h1").nextElementSibling;
//   bt.onclick = function () {
//     //document.querySelector("h1").className = "red";
//     //document.querySelector("h1").classList.remove("orange", "class"); //클래스 삭제
//     document.querySelector("h1").classList.toggle("toggle"); //누를때마다 클래스 추가했다 안했다.
//     document.querySelector("h1").classList.replace("orange", "red"); // 클래스 교체
//   };
//   document.querySelector("h1").classList.add("bg-orange", "orange", "class");

//   // document.querySelector("h1").className = "red";
//   document.querySelector("h1").nextElementSibling.classList.add("red", "bg-gra");
//   document.querySelector("h1").nextElementSibling.nextElementSibling.classList.add("orange");
//   document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bg-orange", "gray");
// });

//제이쿼리로 바꿔쓰면
$(function () {
  var bt = $("h1").next().next().next();
  bt.click(function () {
    //true or false
    if ($(this).hasClass("red")) {
      //hasClass가 red 이면
      $(this).removeClass("bg-orange");
      $(this).addClass("orange");
    }
    $("h1").toggleClass("bg-orange");
  });
  $("h1").addClass("red"); // 클래스 추가
  $("h1").removeClass("red"); //클래스 삭제.
  $("h1").next().addClass("red");
  $("h1").next().next().addClass("orange");
  $("h1").next().next().next().addClass("bg-orange red");
});
