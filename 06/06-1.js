//원뎁스 A를 gnbLiA 할당
let gnbLiA = $(".gnb>li>a");
//border,padding
let aH = $(".sub>li>a").outerHeight()-3;
let check=false;

gnbLiA.click(function () {
    //클래스 삭제는 removeClass('on')
    //추가는 addClass('on')
    // 1. 다른것 다 지우고 하나만 붙이기. 

    if (check == false) {
        $('.sub').css("height", "0px");
            $(this)
                .next()
                .css("height", aH * 4 + "px");
        }
    

    // if문은 조건이 트루이면 실행. 
    function toggle() {
		if (!$(this).next().hasClass("on")) {
			$(".sub").removeClass("on");
			$(this).next().addClass("on");
		} else {
			$(this).next().removeClass("on");
		} //아코디언 토글. 
    }
    //console.log($(this).next().hasClass('on'));
})