// -함수는 기능, 할일.
//선언부
// function 함수이름 (매개변수)
// {실행문}

//실행문
// 함수이름(실행문안의 인자를 argument)

function h2() {
  //안녕하세요를 400번 출력
  for (var i = 1; i <= 4; i++) document.write(`<h2>안녕하세요${i}</h2>`);
}
h2();

function h3(a, b) {
  for (var i = 1; i <= 4; i++) {
    document.write(`<h2>${a}</h2>${b}`);
  }
}

h3("hi", "회원님");
