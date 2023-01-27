//   button.click(function () {
//     var newImg = $(this).find("img").attr("data-lightbox");
//     $target.addClass("visible");
//     $targetImg.attr("src", newImg);
//   });
//   $target.click(function () {
//     $target.removeClass("visible");
//   });

//= $(function(){}) 같음
document.addEventListener("DOMContentLoaded", () => {
  var button = document.querySelectorAll(".gallery a"),
    target = document.querySelector("#lightbox-overlay"),
    targetImg = target.querySelector("img");

  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      let data = this.querySelector("img").getAttribute("data-lightbox");
      targetImg.setAttribute("src", data);
      target.classList.add("visible");
    });
  }
  target.addEventListener("click", function () {
    this.classList.remove("visible");
  });
});
