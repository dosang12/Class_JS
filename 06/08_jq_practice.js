/*
변수 할당
1. section 문서
2. text 그래프
3. ProgressBar 수치 텍스트
*/
let section=$("section")
const progressBar=$(".bar")
const text=$(".txt")
const windowHeight=$(window).height();
let scrollTop;

$(window).scroll(function(){
    scrollTop=$(window).scrollTop();

    let scrollHeight = section.height();
	let scrollRealHeight = scrollHeight - windowHeight;
	let scrollPercent = Math.floor((scrollTop / scrollRealHeight) * 100);
	if (scrollPercent >= 100) {
		scrollPercent = 100;
	}
	text.text(scrollPercent + "%");
	progressBar.css('width' , scrollPercent + "%");
});