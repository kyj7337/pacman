const pac = document.body
  .getElementsByTagName("div")[0]
  .getElementsByClassName("pac")[0];

window.addEventListener("keydown", (e) => handle(e));

const pacPosition = (keycode) => {
  console.log(keycode);
  console.log(pac);
  let leftPosition = Number(pac.style.left.split("px")[0]);
  console.log("pacstyle", pac.style.top);
  let topPosition = Number(pac.style.top.split("px")[0]);

  if (keycode === 39) {
    pac.style.left = `${20 + leftPosition}` + "px";
    pac.style.transform = "unset";
  } else if (keycode === 37) {
    pac.style.left = `${leftPosition - 20}` + "px";
    pac.style.transform = "scaleX(-1)";
  } else if (keycode === 38) {
    console.log("topPosition", topPosition);
    pac.style.top = `${topPosition - 20}` + "px";
    pac.style.transform = "rotate(270deg)";
  } else if (keycode === 40) {
    pac.style.top = `${topPosition + 20}` + "px";
    pac.style.transform = "rotate(90deg)";
  }
};
// transform:rotate(0deg); 움직일때
const handle = (e) => {
  pacPosition(e.keyCode);
  //   if (e.keyCode === 39) {
  //     console.log("오른쪽");
  //   } else if (e.keyCode === 37) {
  //     console.log("왼쪽");
  //   } else if (e.keyCode === 40) {
  //     console.log("아래");
  //   } else if (e.keyCode === 38) {
  //     console.log("위");
  //   }
  //   console.log(e);
};
