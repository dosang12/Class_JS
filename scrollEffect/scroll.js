// 1단계 스크롤양 확인하기
// 3단계 스크롤양이 gap보다 크면 nav에 .sticky 추가
// function js() {
//   const sections = document.querySelectorAll("section");
//   const nav = document.querySelector("nav");

//   let scrollTop;
//   window.addEventListener("scroll", function () {
//     scrollTop = window.pageYOffset;
//     scrollTop = document.documentElement.scrollTop;
//     scrollTop = window.scrollY;
//     h2.innerHTML = scrollTop;
//   });
//   //offsetTop=top 값에서 얼마나 떨어져 있는지를 나타내는 함수.
//   // 0~8까지의 값을 forEach 문을 사용하여 콘솔창에 출력하라.
//   console.log(sections[0].offsetTop);
//   console.log(sections[1].offsetTop);
//   console.log(sections[2].offsetTop);
//   console.log(sections[3].offsetTop);
//   console.log(sections[4].offsetTop);
//   console.log(sections[5].offsetTop);
//   //array배열.forEach(콜백함수)
//   sections.forEach((el) => {
//     console.log(el.offsetTop);
//   });
// }
// js();
// // h2에 스크롤양 확인하는 함수.
/* 1. 스크롤 양 확인 */
function js() {
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll("section");
  const gnb = nav.querySelectorAll(".gnb>li");
  const sidenav = document.querySelectorAll(".sideNav>li");
  function removeON(obj) {
    sidenav.forEach((o) => {
      o.classList.remove("on");
    });
  }
  let scrollTop;
  window.addEventListener("scroll", function () {
    // scrollTop=window.pageYOffset;
    // scrollTop=document.documentElement.scrollTop;
    scrollTop = window.scrollY; //이게 표준
    animate(scrollTop);
  });
  let gap = 200;
  const animate = (sct) => {
    //section
    sections.forEach((el, idx) => {
      //idx :012345678
      //gnb[idx]
      let sectionTop = el.offsetTop;
      if (sct > sectionTop - gap) {
        gsap.to(el, { background: "#8d3dae" });
        gnb.forEach((obj) => {
          obj.classList.remove("on");
        });
        gnb[idx].classList.add("on");
      }
    });
    //조건변경-nav의 높이만큼 스크롤이 내려오면 sticky
    // 요소의 높이었기. element.clientHei
    sct >= gap ? nav.classList.add("sticky") : nav.classList.remove("sticky");
  };

  //gnb를 클릭하면 해당 섹션으로 부드럽게 이동
  gnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(el.firstElementChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      removeON(gnb);
      el.classList.add("on");
    });
  });
  sidenav.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(el.firstElementChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      removeON(sidenav);
      el.classList.add("on");
    });
  });
}

js();
