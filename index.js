const pac = document.body
  .getElementsByTagName("div")[0]
  .getElementsByClassName("pac")[0];
let distance = 15;
window.addEventListener("keydown", (e) => handle(e));

const pacPosition = async ({ key, left, top }) => {
  // console.log(keycode);
  // console.log(pac);
  const moveAction = () => {
    if (key === 39) {
      // ! Right
      pac.style.left = `${distance + left}` + "px";
      pac.style.transform = "unset";
    } else if (key === 37) {
      // ! Left
      pac.style.left = `${left - distance}` + "px";
      pac.style.transform = "scaleX(-1)";
    } else if (key === 38) {
      // ! Up
      pac.style.top = `${top - distance}` + "px";
      pac.style.transform = "rotate(270deg)";
    } else if (key === 40) {
      // ! Down
      pac.style.top = `${top + distance}` + "px";
      pac.style.transform = "rotate(90deg)";
    }
    return Promise.resolve({
      top: Number(pac.style.top.split("px")[0]),
      left: Number(pac.style.left.split("px")[0]),
    });
  };
  await moveAction().then((res) => {
    restrictedSite({ left: res.left, top: res.top });
  });
};

const handle = (e) => {
  let leftPosition = Number(pac.style.left.split("px")[0]);
  let topPosition = Number(pac.style.top.split("px")[0]);

  if (leftPosition < 0 || leftPosition >= 705) {
    if (leftPosition < 0) {
      pac.style.left = `${leftPosition + distance}` + "px";
      pac.style.transform = "unset";
    } else if (topPosition === 425 && leftPosition >= 705) {
      pac.style.left = "0px";
      alert("성공하셨습니다");
    }
  } else {
    pacPosition({ key: e.keyCode, left: leftPosition, top: topPosition });
  }
};

const restrictedSite = ({ left, top }) => {
  console.log("left:", left, "top:", top);
  // * 1. 첫번째 직진 코스
  if (0 <= left && left <= 135) {
    if (top > 425 || top < 425) {
      pac.style.top = "425px";
      pac.style.transform = "unset";
    }
  }
  if (left === 150 && top === 725) {
    console.log("세로길");
  }
};
