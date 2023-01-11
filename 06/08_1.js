const main=document.querySelector(".main")
const text=document.querySelector(".txt")
const blackBar=document.querySelector(".bar")
var scrollHeight=document.body.scrollHeight;
const windowHeight=window.innerHeight;

let scrollTop;

window.addEventListener('scroll',function(){
    scrollTop=window.scrollY;
    
    let scrollRealHeight = scrollHeight-windowHeight
    let scrollPercent = (scrollTop/scrollRealHeight)*100
    text.textContent=Math.floor(scrollPercent)+"%"
    blackBar.style.height=Math.floor(scrollPercent)+"%"
})