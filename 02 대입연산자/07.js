//삼항연산자 : 항이 3개. (조건)?참일때:거짓일때
let your = "어려워요";
let study = your == "어려워요" ? "천재이시군요" : "복습하세요";
document.write(`자바스크립트가 ${your}<h1>${study}</h1>`);
document.write(`<hr>`);
let x = 3000;
let y = 7000;
let z = 2000;
let total = x + y + z;
const result = total > 10000 ? x + y + z - 10000 + "원 초과" : "돈 관리 참 잘했어요!";
document.write(`<h2>${result}</h2>`);
