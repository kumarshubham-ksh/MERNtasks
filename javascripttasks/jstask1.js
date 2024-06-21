function reverseNumber(x) {
  const reversedString = x.toString().split("").reverse().join("");
  const reversedNumber = parseInt(reversedString);
  return reversedNumber;
}
const userInput = prompt("Enter a number:");
const inputNumber = parseFloat(userInput);
if (!isNaN(inputNumber)) {
  const reversedX = reverseNumber(inputNumber);
  alert(`Reversed number: ${reversedX}`);
} else {
  alert("Invalid input. Please enter a valid number.");
}
