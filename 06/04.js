// // //자바 스크립트 문법으로.

// let list1=document.querySelectorAll("#list1 > li");
// list1.forEach(function(el,idx){
//     el.textContent="aaa"+idx
//     el.classList.add("a"+idx);
// })
// let list2=document.querySelector(".theObj");
// list2.innerHTML="<span>"+Math.random()+"</span>"
// list2.setAttribute("data-role","accessbillity");
// let list22=list2.getAttribute("class");
// console.log(list22)
// list2.nextElementSibling.textContent=list22;

// let list3=document.querySelector("#list3")
// list3.innerHTML+="<li>🐱‍👓추가한 list6</li>"
// //"afterbegin" 내부에서 가장 첫째
// list3.insertAdjacentHTML("afterbegin","<li>🎶추가한 list6</li>")
// //"afterbegin" 내부에서 가장 막내
// list3.insertAdjacentHTML("beforeend","<li>🍔추가한 list6</li>")
// //beforebegin 바로 앞에
// list3.insertAdjacentHTML("beforebegin","<div>🏯추가한 div</div>")
// //afterend 바로 뒤에
// list3.insertAdjacentHTML("afterend","<div>⚡추가한 div</div>")

// let list3Li=document.querySelectorAll("#list3 li")
// list3Li[4].insertAdjacentHTML("beforebegin","<li>🚀넣어보세요</li>")



// ////제이 쿼리 문법으로.
$(()=>{
let list1=$("#list1 > li");
list1.each(function(idx,el){
    $(el).addClass("a"+idx).text("aaa"+idx)
})
    let list2=$(".theObj");
    list2.html("<span>"+Math.random()+"</span>")
    list2.attr("data-role","accessbillity");

    list2.attr("class","abcd");
    let list22=list2.attr("class");
    console.log(list22);
    list2.next().text(list22);
    list2.html("<span>"+list22+"</span>")

    let list3=$("#list3")
    list3.append("<li>🐱‍👓추가한 list6</li>")
    list3.prepend("<li>🎶추가한 list6</li>")
    let list33=$("#list3 li")
    list33.eq(4).before("<li>🏡집이 좋다!</li>")
    // //beforebegin 바로 앞에
    // list3.insertAdjacentHTML("beforebegin","<div>🏯추가한 div</div>")
    // //afterend 바로 뒤에
    // list3.insertAdjacentHTML("afterend","<div>⚡추가한 div</div>")
    
    // let list3Li=document.querySelectorAll("#list3 li")
    // list3Li[4].insertAdjacentHTML("beforebegin","<li>🚀넣어보세요</li>")
    
    //     el.textContent="aaa"+idx
//     el.classList.add("a"+idx);

})