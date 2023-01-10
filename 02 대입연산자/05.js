let x = 10,
  y = 20,
  z = "10";
document.write(`x>=y : ${x >= y}<br>`); //x>=y : false
document.write(`x>y : ${x > y}<br>`); //도 가능.
document.write(`x&lty : ${x < y}<br>`); // x<=y : true
document.write(`x!=y : ${x != y}<br>`);
// ! 부정연산자. 값이 다르면 ture

document.write(`x!=z : ${x != z}<br>`); //문자10과 숫자 10은 다르다.
document.write(`x!==z : ${x !== z}<br>`); //10=="10" 얕은비교
document.write(`x==z : ${x == z}<br>`); //10==="10" 깊은비교
document.write(`x===z : ${x === z}<br>`); // 자료형이 다르면 false
