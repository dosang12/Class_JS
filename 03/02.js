// 배열 추가

const todos = ["우유구매", "업무메일확인", "필라테스수업"];
todos.push("망고목욕");
todos.push("망고산책");
console.log(todos);

document.write(`<h1>오늘 스케쥴 : ${todos} </h1>`);

// 배열 추가2
const basket = ["소세지", "소주", "햇반"];
basket[10] = "귤";

//배열 추가3 length를 활용한
basket[basket.length] = "삼겹살";
basket[basket.length] = "불고기";
basket[basket.length] = "쭈꾸미삼겹살";
basket[basket.length] = "낙지볶음";

document.write(`<hr><h1>저녁식단: ${basket}</h1>`);

console.log(basket);
