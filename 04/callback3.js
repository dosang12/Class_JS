const 테스트 = function (배열, 콜백함수) {
  for (const 값 of 배열) {
    콜백함수(값);
  }
};

const 함수 = function (콜백매개변수) {
  document.write(`와 ${콜백매개변수}번째 쓰면 알아 들을까?<br>`);
};

테스트([25, 879, 4981, 15, 39], 함수);
