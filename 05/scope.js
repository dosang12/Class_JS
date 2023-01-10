// scope
let sum = "전역"; //전역 변수선언
function addNumber() {
  let sum = "지역"; //지역변수이므로 함수블록안에 갖혀서 실행안됨 } 겹치면 지역변수가 우선. addNumber(); console.log(sum);
}
addNumber();
console.log(sum);

//sum을 찍어보는 방법
// 1. 전역변수에 값을 담는다 (let을 밖으로 뺀다.)
// 2. console.log를 안으로 옮긴다.
// 3. return 문에 sum을 전달.
// 4. 다른 함수에 인자로 전달.
