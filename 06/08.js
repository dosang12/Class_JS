//section 변수에 담기
const section=document.querySelector('section')
//변수에 담아야 할 것들
const text=document.querySelector(".txt")
const progressBar=document.querySelector(".bar")
//창 높이 
const windowHeight=window.innerHeight;
//스크롤 양을 담을 변수
let scrollTop;

window.addEventListener('scroll',function(){
    scrollTop=this.window.pageYoffset || document.documentElement.scrollTop || this.window.scrollY;
    // 퍼센트 구하기
    // 1. windowHeight
    // 2. 문서 총 높이 변수로 선언 후 ???. clientHeight //패딩을 포함한 높이. 
    // 3. 2(문서높이)-1(windowHeight)=스크롤양
    let scrollHeight=section.clientHeight
    let scrollRealHeight = scrollHeight-windowHeight;
    // 백분율로 바꾸기 (부분/전체)*100 
    let scrollPercent=(scrollTop/scrollRealHeight)*100
    text.textContent=Math.floor(scrollPercent)+"%";
    progressBar.style.width=Math.floor(scrollPercent)+"%"
})


