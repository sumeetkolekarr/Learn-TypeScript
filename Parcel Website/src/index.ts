const buttonElem = document.querySelector(".clickMe") as HTMLButtonElement;
const bodyElem: HTMLElement = document.body;
let isWhite: boolean = false;

buttonElem.addEventListener("click", () => {
  isWhite = !isWhite;
  if (isWhite) {
    bodyElem.style.backgroundColor = "#FEECE0";
  } else {
    bodyElem.style.backgroundColor = "#73ADED";
  }
});

console.log("Hello, I am Working");
