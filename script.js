const userInput =  document.querySelector("#user-input");
var expression = "";

press = (num) => {
  expression += num;
  userInput.value = expression;
}

calculate = () => {
  userInput.value = eval(expression);
  expression = "";
}

erase = () => {
  expression = "";
  userInput.value = expression;
}