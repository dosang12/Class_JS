const color = ["gray", "green", "red", "blue", "purple", "skyblue", "black"];
let i = 0;

function colorBg() {
  let bodyTag = document.getElementsByTagName("body")[0];
  bodyTag.style.backgroundColor = color[i];
  i++;
  if (i >= color.length) {
    i = 0;
  }
}
