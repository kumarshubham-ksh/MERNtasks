function sortStringAlphabetically(inputString) {
  const sortedString = inputString.split("").sort().join("");
  return sortedString;
}
const userInput = prompt("Enter a string:");
if (userInput !== null) {
  const sortedOutput = sortStringAlphabetically(userInput);
  alert(`Sorted string: ${sortedOutput}`);
} else {
  alert("User cancelled input.");
}
