// 상수 textZone에 #textZone 을 할당하시오
const textZone=document.querySelector("#textZone")
//#btn1 클릭시 textZone의 글씨색을 변경
// 1. 함수를 실행할 요소를 선택
//    상수 btn1에 #btn1을 할당
// 2. 함수 실행(=호출)시점과 수행동작{실행문}을 확인 / 두부분을 나눔

const btn1=document.querySelector("#btn1");
btn1.onclick=function(){
    textZone.style.color="blue"
    textZone.classList.add("blue")
}
const btn2=document.querySelector("#btn2")
btn2.onmouseover=function(){
    textZone.style.background="yellow"
    
}
btn2.onfocus=function(){
    textZone.style.backgroundColor="green"
}

//btn3에 이벤트 여러개 등록
const btn3=document.querySelector("#btn3")
function textZone4(){
    textZone.style.color="red";
    textZone.style.fontSize="2em";
}
// btn3.onmouseover=textZone4;
// btn3.onfocus=textZone4;
// btn3.onclick=function(){alert("click")};
// btn3.onclick=function(){
//     textZone.style.marginLeft="80px";
//같은요소에 같은 이벤트를 주면 마지막 이벤트 하나만 실행된다.
// }
// 

//property listener로 이벤트 등록시 같은 이벤트
btn3.addEventListener('',function(){
    alert("click")
})
btn3.addEventListener('',function(){
    textZone.style.marginLeft="80px"
})

const listWrap=document.querySelector("#listWrap")
const list1=document.querySelector(".list1")
listWrap.addEventListener("mouseenter",function(){list1.style.display="block"})
listWrap.addEventListener("mouseleave",function(){list1.style.display="none"})

let hover=document.querySelector(".hover");
//마우스가 hover 에 진입시 글씨색을 aqua
//마우스가 hover 에 벗어날시 글씨색을 red
// hover.addEventListener("mouseenter",function(){this.style.color="aqua"})
// hover.addEventListener("mouseleave",function(){this.style.color="red"})
//this 는 이벤트르 발생시킨 대상을 가르킨다. 함수를 호출한 hover를 가르킨다. 
hover.addEventListener("mouseenter",()=>{
    //이벤트를 화살표 함수로 작성시 this는 객체가 자신이 아닌 윈도우를 가르킴
    console.log(this)
    this.style.color="aqua"})