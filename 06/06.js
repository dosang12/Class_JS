//제이쿼리

// var sub=$(".sub")
// sub.css("display","none")
// $(".gnb>li>a").click(function(){
//     var k=$(this).next(".sub").css("display");
//     if(k==='none'){
//         $(this).next().slideDown();
//     } else{
//         $(this).next().slideUp();
//     }
// })

var sub=document.querySelector(".sub")
sub.style.transition='height 0.5s'
sub.style.overflow='hidden'
sub.style.height='0px'

//자바스크립트.

document.querySelector(".gnb>li>a").
addEventListener(
'click', function(){
    var k=this.nextElementSibling.style.height;
    if(k==='0px'){
   this.nextElementSibling.style.height='144px';
  } else{
    this.nextElementSibling.style.height='0px';   }
}
)