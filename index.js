const joke = document.getElementById("joke");
const id = document.querySelector(".id");
const btn = document.getElementById("btn");

fetch("https://v2.jokeapi.dev/joke/Any")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw "Error";
    }
  })
  .then((data) => {
    joke.innerText = data.setup;
    btn.addEventListener("click", () => {
      id.classList.toggle("answer");
      id.innerText = data.delivery;
    });
  });
