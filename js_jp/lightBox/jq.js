$(function () {
  var button = $(".gallery a"),
    $target = $("#lightbox-overlay"),
    $targetImg = $target.find("img");

  button.click(function () {
    //큰 이미지 주소
    var newImg = $(this).find("img").attr("data-lightbox");
    //변수 oldImg 를 선언 후 this 하위 img의 src를 할당하시오.
    // var oldImg = $(this).find("img").attr("src");
    // console.log(oldImg);
    $target.addClass("visible");
    $targetImg.attr("src", newImg);
  });
  $target.click(function () {
    $target.removeClass("visible");
  });
});
