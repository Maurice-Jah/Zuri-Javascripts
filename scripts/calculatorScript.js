let operator = prompt(
  "What Operation do you want to peform? Choose from any of these (+ or - or / or *) "
);

let num1 = Number(prompt("Input your First Number "));
let num2 = Number(prompt("Input your Second Number "));

let result;
switch (operator) {
  case "+":
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Only digits are allowed");
      break;
    }
    result = num1 + num2;
    console.log("The addition of " + num1 + " and " + num2 + " is " + result);
    break;

  case "-":
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Only digits are allowed");
      break;
    }
    result = num1 - num2;
    console.log(
      "The substraction of " + num2 + " from " + num1 + " is " + result
    );
    break;

  case "/":
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Only digits are allowed");
      break;
    }
    result = num1 / num2;
    console.log("The division of " + num1 + " by " + num2 + " is " + result);
    break;

  case "*":
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Only digits are allowed");
      break;
    }
    result = num1 * num2;
    console.log("The product of " + num1 + " and " + num2 + " is " + result);
    break;

  default:
    console.log(
      "Make sure you entered a valid number with the right operator command. Thanks 🙏"
    );
}
