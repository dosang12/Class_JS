//데이터형 활용
//문자자료형 string
//let x;
//let y;
let x, y;
x = 7 + 5;
y = "7" + 5 + 5;
document.write(x + y);
console.log(x, y);
document.write("<br>");
document.write(x); // 12
document.write(y); // 문자 7과 5가 출력.
document.write("y"); // 문자 y가 출력
// 자바스크립트에서 표현식을 작성할때 문자는 따옴표로 묶고
// 변수나 숫자는 묶지 않는다.
// 자바스크립트에서는 태그도 문자열로 취급된다.

//document=메서드=객체 - 에 저장되어 있는 함수를 의미한다.
//ex) document.write document에 저장되어있는 write함수.
const wakeup = "밥먹고 출근해야지...";
document.write('<h1 style="color:green">', wakeup, "</h1>");

//es6에 추가된 템플릿 리터럴
document.write(`<h1 style="color:red">${wakeup}</h1>`);
