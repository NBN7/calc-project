const numbers = document.querySelectorAll(".number");
const op = document.querySelectorAll(".op");
const clearAll = document.getElementById("clear");
const del = document.getElementById("del");
const actual = document.getElementById("actual");
const previous = document.getElementById("previous");
const equals = document.getElementById("equals");

var symbol,
  flag = false,
  firstNumber = 0,
  secondNumber = 0;

numbers.forEach((item) => {
  item.addEventListener("click", () => {
    if (actual.textContent === "0") actual.textContent = "";
    if (actual.textContent.includes(".") && item.textContent === ".") return;
    else actual.textContent += item.textContent;
  });
});

op.forEach((item) => {
  item.onclick = () => {
    if (flag === false) {
      symbol = item.textContent;
      firstNumber = parseFloat(actual.textContent);
      previous.textContent += actual.textContent;
      flag = true;
      setZero();
    }
  };
});

equals.onclick = () => {
  secondNumber = parseFloat(actual.textContent);
  solve();
  clsPrevious();
};

clearAll.onclick = () => {
  setZero();
  clsPrevious();
};

del.onclick = () => {
  actual.textContent = actual.textContent.slice(0, -1);
  if (actual.textContent === "") setZero();
};

const clsPrevious = () => {
  previous.textContent = "";
};

const setZero = () => {
  actual.textContent = "0";
};

const fullReset = () => {
  firstNumber = 0;
  secondNumber = 0;
  symbol = "";
  flag = false;
};

const solve = () => {
  if (firstNumber === 10 && secondNumber === 0) {
    actual.textContent = "MESSI";
  } 
  else {
    switch (symbol) {
      case "/":
        actual.textContent = firstNumber / secondNumber;
        break;
      case "x":
        actual.textContent = firstNumber * secondNumber;
        break;
      case "-":
        actual.textContent = firstNumber - secondNumber;
        break;
      case "+":
        actual.textContent = firstNumber + secondNumber;
        break;
    }
  }
  fullReset();
};