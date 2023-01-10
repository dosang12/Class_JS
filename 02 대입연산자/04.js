//후위 연산자.
let x = 1;
document.write(x++); //x=x+1 //후위연산자 //출력후에 재 할당함.
document.write("<br>"); //1을 선언 하지만 선언 후에 값이 더해짐
document.write(x); //1이 더해진 2가 출력됨.
document.write("<br>");
document.write(x++); // 2출력후 1을 더함, 후위연산자.
document.write("<br>");
document.write(x++); // 3출력후 1더함
document.write("<br>");
document.write(x++); // 4출력후 1더함
document.write("<br>");
document.write(x); // 5출력후 1더함
document.write("<hr>");

//전위연산
x = 1;
document.write("<br>", ++x); // 바로 2 출력함.
document.write("<br>", ++x); // 1을 더해서 바로 3 출력함.
document.write("<br>", ++x); // 전 값인 3에서 1을 더해서 4를 출력.
document.write("<br>", ++x); // 5출력
document.write("<hr>", x++); // 5(5+1=6)을 가지고 있다.
document.write("<hr>");
//후위연산자(-)
let y = 1;
document.write(`<h1>${y--}<br>${y}<br>${--y}</h1>`); // 1=1-1(0)
