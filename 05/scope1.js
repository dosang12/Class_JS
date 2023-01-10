function add() {
  var sum = 10 + 20; // 지역변수
  multi = 10 * 20; //앞에 식별자만 쓰는 것은 전역변수. var let 붙음 지역변수
  total = sum; //30
  return total;
}
add();
console.log(multi);
console.log(total);
console.log(sum);
