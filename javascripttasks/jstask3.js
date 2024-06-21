function multiplyNumbers() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
  const result = firstNumber * secondNumber;
  document.getElementById("info").textContent = `The Result Is:`;
  document.getElementById("result").textContent = `${result}`;
}
function divideNumbers() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value
  );
  if (secondNumber !== 0) {
    const result = firstNumber / secondNumber;
    document.getElementById("info").textContent = `The Result Is:`;
    document.getElementById("result").textContent = `${result}`;
  } else {
    document.getElementById("result").textContent = "Cannot divide by zero!";
  }
}
