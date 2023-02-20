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
  let scrollTop;
  window.addEventListener("scroll", function () {
    // scrollTop=window.pageYOffset;
    // scrollTop=document.documentElement.scrollTop;
    scrollTop = window.scrollY; //이게 표준
    animate(scrollTop);
  });
  let gap = 350;
  const animate = (sct) => {
    //section
    sections.forEach(function (el) {
      let sectionTop = el.offsetTop;
      //스크롤이 해당위치를 넘어가면 클래스를 추가해서 배경효과를 줌.
      if (sct > sectionTop - gap) {
        el.classList.add("sectionIn");
      }
    });
    //sticky-nav
    if (sct >= gap) {
      nav.classList.add("sticky");
    }
    if (sct >= gap * 2) {
      nav.style.background = "blue";
    } else {
      nav.classList.remove("sticky");
      nav.style.background = "green";
    }
  };
  //gnb를 클릭하면 해당 섹션으로 부드럽게 이동
  gnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(el.firstElementChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      gnb.forEach((obj) => {
        oj.classList.remove("on");
      });
      el.classList.add("on");
    });
  });
}
js();

// 2단계 제이쿼리로 바꾸기!!

// function jq() {
//   const sections = $("section");
//   let scrollTop;

//   $(window).scroll(function () {
//     scrollTop = $(this).scrollTop();
//     animate(scrollTop);
//   });

//   let gap = 300;
//   const animate = (sct) => {
//     sections.each((idx, el) => {
//       /* el이 제이쿼리 객체로 반환되지 않고 일반태그로 반환돼서 매번 반환값을 객체로 변환해야함
//             idx를 .eq 메서드에 넣어서 작성함
//         */
//       let tg = sections.eq(idx);
//       if (sct > tg.offset().top - gap) {
//         tg.addClass("sectionIn");
//       }
//     });
//   };
//   //   const animate = (sct) => {
//   //     //내장함수 정해진자리
//   //     //array(배열).forEach(element,index) 배열자료형만 취급한다.
//   //     //$array(배열).each(element,index)
//   //     $(array).each(index);
//   //     sections.each((idx, el) => {
//   //       let tg = el;
//   //       let sectionTop = tg.offset().top;
//   //       if (sct > sectionTop - gap) {
//   //         el.addClass("sectionIn");
//   //       }
//   //       //   let sectionTop = el.offsetTop;s
//   //       //   if (sct > sectionTop - gap) {
//   //       //     el.classList.add("sectionIn");
//   //       //   }
//   //     });
//   //   };
// }
// //jq();
