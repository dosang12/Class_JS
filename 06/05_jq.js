const textZone=$("#textZone")
const btn1=$("#btn1")
btn1.click(function(){
    textZone.css("color","blue")
})

const btn2=$("#btn2");
//같은 대상이면 btn2를 다시 써줄 필요가 없다. 메서드 체이닝
btn2.mouseover(function(){
    textZone.css("background","yellow")
}).mouseleave(function(){
    textZone.css("background","blue")
})

btn2.focus(function(){
    textZone.css("background","red")
})
// 두개 이상의 이벤트 연결. (이벤트 바운딩.)
const btn3=$("#btn3")
// btn3.mouseover(function(){
//     textZone.css("color","red")
//     textZone.css("background","blue")
// })
// btn3.mouseleave(function(){
//     textZone.css("color","green")
//     textZone.css("background","purple")
// })

/* 다른이벤트에 같은 함수적용
btn3.on("mouseover focus ", function () {
	textZone.css("color", "green");
	textZone.css("background-color", "red");
});
*/
//이벤트도 다르고 실행문도 다름
btn3.on({
	"mouseover focus ": function () {
		textZone.css("color", "green");
		textZone.css("background-color", "red");
	},
	"click": function () {
		alert("click");
		textZone.css("margin-left", "80px");
	},
});


$("#listWrap").hover(
	function () {
    $(".list1").css("display","block");
    $(this).css("display","block");
  },
	function () {
    $(".list1").css("display","none");
    $(this).css("background","blue");
  }
);
