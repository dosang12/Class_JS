const item = ["사과", "배", "한라봉", "바나나"];
document.write(`원래 배열: ${item}<hr>`);
//인덱스 번호로 제거
//splice는 앞에 무조건 배열형태여야 한다.
item.splice(2, 1);
//()속은 (n번째인덱스부터,n개)를 의미한다.
document.write(`원래 배열: ${item}<hr>`);

//indexOf() 값이 있으면 index번호를 없으면 -1을 반환하는 함수.
const animals = ["강아지", "고양이", "보노보노", "곰"];
document.write(`<p>동물은 ${animals}입니다</p>`);

// const index = animals.indexOf("스폰지밥"); // -1
const index = animals.indexOf("보노보노");
console.log(index);
animals.splice(index, 1);
document.write(`<hr>진짜 동물은${animals}입니다`);

animals[3] = "스폰지밥";
animals.push("스폰지밥");
animals[animals.length] = "스폰지밥";
animals.splice(animals.length, 0, "스폰지밥");
//다 같은표현이다.

document.write(`<hr>새로운 동물은 ${animals} 입니다.`);
