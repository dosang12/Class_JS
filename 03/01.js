//배열의 생성.

//배열의 선언1 - 빈 배열 선언후 값 할당.
let str = [];
//자바스크립트는 문자형은 배열로 다룬다.
//배열은 컴퓨터가 카운트해서 0부터 시작한다.

//각 문자당 번호가 할당된다.
// 선=0 문=1 아=2 그=3 만=4 자=5
str = "선문아그만자";
document.write(str[0] + str[1] + str[2] + str[5 - 2] + str[str.length - 1] + "<hr>");

//배열의 총길이
//length=는 사람이 세는것처럼 1부터 시작.
document.write(str.length, "<hr>"); //6

//배열의 생성2

const arr = [];
arr[0] = "우";
arr[1] = "영";
arr[2] = "우";

const arr1 = [273, "string", true, function () {}, {}, [273, 106]];

document.write(arr[0] + arr[1] + str[2] + str[3] + str[4] + str[5]);

const arr2 = [, , ,];
arr2[1] = "망";

// 배열의 생성3

const arr3 = new Array(1, 2, 3);
console.log(arr3[arr3.length - 2 + 1]);
const arr4 = new Array(3);
console.log(arr4);

const fruits = ["배", "사과", "키위", "바나나"];
fruits[4] = "소세지";
document.write("<hr>", fruits.length);

document.write("<hr>", "준호가 먹은 과일은 총" + fruits.length + "개 입니다");
document.write("<hr>", "준호의 뱃속에 있는 2번째 과일은" + fruits[1] + " 입니다");
document.write("<hr>", "준호는 오늘 과일을" + fruits + " 먹었습니다. 그중 가장 맛있었던 것은" + fruits[3] + "입니다");
