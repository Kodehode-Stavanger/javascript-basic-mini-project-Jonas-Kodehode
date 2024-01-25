document.getElementById("joke-button").addEventListener("click", () => {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((joke) => {
      displayJoke(joke);
    })
    .catch((error) => {
      console.error("Couldn't fetch joke", error);
    });
});

let result = document.getElementById("result");

function calculator() {
  let number1 = parseInt(document.getElementById("input").value);
  let operator = document.getElementById("input2").value;
  let number2 = parseInt(document.getElementById("input3").value);
  let total = "";
  switch (operator) {
    case "plus":
      total = number1 + number2;
      break;
    case "minus":
      total = number1 - number2;
      break;
    case "times":
      total = number1 * number2;
      break;
    case "divided-by":
      total = number1 / number2;
      break;
    default:
      total = "Invalid Operation";
  }
  result.textContent = `The answer is ${total}`;
}

function displayJoke(joke) {
  document.getElementById("joke-setup").textContent = joke.setup;
  document.getElementById("joke-punchline").textContent = joke.punchline;
}
