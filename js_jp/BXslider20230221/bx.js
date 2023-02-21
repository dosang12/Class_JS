$(document).ready(function () {
  $(".bxslider").bxSlider({
    mode: "horizontal",
    speed: 500,
    captions: true,
    controls: true,
    nextText: '<i class="fa-solid fa-arrow-right"></i>',
    prevText: '<i class="fa-solid fa-arrow-left"></i>',
    auto: true,
    autoControls: true,
    startText: "✅",
    stopText: "❎",
  });
  $(".videoSlider").bxSlider({
    video: true,
    auto: true,
    onSliderLoad: function (currentIndex) {
      $(".videoSlider div")
        .eq(currentIndex + 1)
        .find("video")
        .get(0)
        .play();
    },
    onSliderAfter: function ($slideElement, oldIndex, newIndex) {
      console.log($slideElement, oldIndex, newIndex);
      $slideElement.siblings().find("video").get(0).pause();
      $slideElement.find("video").get(0).play();
    },
  });
  $(".active").bxSlider({
    auto: true,
    onSliderLoad: function (currentIndex) {
      $(".active li")
        .eq(currentIndex + 1)
        .addClass("active");
    },
    onSliderAfter: function ($slideElement) {
      $slideElement.addClass("active").siblings().removeClass("active");
    },
  });
});
