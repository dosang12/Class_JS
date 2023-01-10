//객체의 생성방법 3가지
var dog = new Object();
dog = {
  // 선언시 key : value
  name: "망고",
  features: "말티즈",
};

document.write(dog.name);
document.write(`<h1>${dog.name}</h1>`); //템플릿 리터럴 방법.

//2 객체의 생성방법 2
const baby = { name: "망고", features: "말티즈" };
document.write(`<h1>${baby.features}</h1>`);

//3 객체의 생성방법 method
const pet = {
  name: "망고",
  eat: function (food) {
    document.write(`<h1>${this.name}는${food}를 좋아해요</h1>`);
  }, //객체 안에서의 this는 객체를 가르친다. 즉 여기서 this는 pet
};
pet.eat("연어");

pet.eat("닭가슴살");
