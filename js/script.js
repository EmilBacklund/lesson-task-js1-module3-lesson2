// Question 1
function greet(name = "John") {
  return `Hello ${name}!`;
}

console.log(greet("Emil"));

//! Question 2
function reusableFunction(
  type = "red",
  message = "Hi, my name is Emil and my favourite color is green"
) {
  const html = `<div class="message ${type}">${message}</div>`;

  return html;
}

console.log(reusableFunction());

const container = document.querySelector(".message-container");

const message = reusableFunction();

container.innerHTML = message;

//? Question 3

async function getFact() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results[2]);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("I log this regardless");
  }
}

getFact();
