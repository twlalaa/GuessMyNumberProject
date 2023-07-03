"use strict";

let inputEl = document.getElementById("input");
let messageEl = document.getElementById("message");
let guessEl = document.getElementById("guess-count");
let scoreEl = document.getElementById("score-count");

let mainBtn = document.getElementById("guess-btn");

let guess = 0;
let score = 20;

let myrandomNumber = Math.floor(Math.random() * 50) + 1;

console.log(myrandomNumber);

mainBtn.addEventListener("click", () => {
  if (+inputEl.value < 1 || +inputEl.value > 50) {
    alert("You did not choose between 1-50!");
    guess++;
    score--;
  } else {
    if (myrandomNumber - +inputEl.value > 0) {
      messageEl.innerHTML = `Too Low!`;
      messageEl.style.color = "red";
    } else if (myrandomNumber - +inputEl.value < 0) {
      messageEl.innerHTML = `Too High!`;
      messageEl.style.color = "red";
    } else if (myrandomNumber === +inputEl.value) {
      messageEl.innerHTML = `Correct!`;
      messageEl.style.color = "green";
      alert(`Congrats! You won!`);
    }
    guess++;
    score--;
  }
  guessEl.innerHTML = guess;
  scoreEl.innerHTML = score;
});
