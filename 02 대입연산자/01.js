// 산술연산자
// + - * / %  더하기 빼기 곱하기 나누기 나머지
const x = 75;
const y = 87;
const add = x + y;
document.write("국어점수:" + x + "<br>");
document.write("수학점수:" + y + "<br>");
document.write("총점:" + add + "<br>");
document.write("평균:" + add / 2 + "<br>");
document.write("<br>");

//템플릿 리터럴방식으로 적기.
document.write(`국어점수:${x}<br>수학점수:${y}<br>총점:${add}<br>평균:${add / 2}`);
