const buttonFunc = (e) => {
  equationE.value += e.target.textContent;
};

let equationE = document.getElementById("equation");
let answerE = document.getElementById("answer");
let backspace = document.getElementById("backspace");
let equals = document.getElementById("button-=");
let buttons = document.querySelectorAll(".buttons p");

for (i of buttons) {
  if (i.textContent == "=") {
    continue;
  }
  i.addEventListener("click", (e) => {
    buttonFunc(e);
  });
}

backspace.addEventListener("click", () => {
  equationE.value = equationE.value.slice(0, equationE.value.length - 1);
});

equals.addEventListener("click", () => (equationE.value = answerE.textContent));

equationE.addEventListener("keyup", (e) => {
  // console.log(e)
  e.preventDefault();
  if (e.key == "Enter") {
    equals.click();
  }
});

setInterval(() => {
  equationE.value = equationE.value.replaceAll(" ", "");
  if (equationE.value != "") {
    try {
      answerE.textContent =
        Math.round((eval(equationE.value) + Number.EPSILON) * 1000) / 1000;
    } catch {
      if (equationE.value == "ERROR!") {
        answerE.textContent = "0";
      } else {
        answerE.textContent = "ERROR!";
      }
    }
  } else {
    answerE.textContent = "0";
  }
}, 20);

// equationE.focus();
