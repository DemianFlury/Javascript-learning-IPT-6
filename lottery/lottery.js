"use strict";

document.addEventListener("DOMContentLoaded", main);

function main() {
  //clear button
  document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("guess").value = "";
  });

  //Start the game when the play button is pressed
  document.getElementById("play").addEventListener("click", game);
}

//declare arrays
var guesses = [],
  guessesUnique = [],
  numbers = [],
  play;

function game() {
  //read input
  guesses = document.getElementById("guess").value;
  guesses = guesses.split(",");

  guesses.forEach((element) => {
    Number.parseInt(element);
    //check inputs
    if (isNaN(element)) window.alert("Please type numbers");
    else if (element > 45 || element < 1)
      window.alert("Please type numbers between 1 and 45.");
    else if (guessesUnique.includes(element))
      window.alert("Please type each number only once.");
    else {
      guessesUnique.push(element);
    }
  });

  //random numbers
  while (numbers.length < 6) {
    let rng = Math.floor(Math.random() * 44) + 1;
    if (numbers.includes(rng));
    else {
      numbers.push(rng);
    }
  }

  //compare numbers
  let corrguesses;
  for (x of guessesUnique) {
    if (numbers.includes(x)) {
      corrguesses++;
    }
  }
  if (corrguesses == 0) winamount = 0;
  else if (corrguesses == 1) winamount = 0;
  else if (corrguesses == 2) winamount = 5;
  else if (corrguesses == 3) winamount = 10;
  else if (corrguesses == 4) winamount = 500;
  else if (corrguesses == 5) winamount = 50000;
  else if (corrguesses == 6) winamount = 1000000;
  else window.alert("something went wrong :(");

  //output the numbers and winnings
  let g = document.createElement("div");
  g.setAttribute("class", "ball");
  g.innerHTML = numbers[0].toString();

  document.getElementById("correct").innerHTML = corrguesses.toString();
  document.getElementById("win").innerHTML = winamount.toString();

  //Update money
  var balancenow = parseInt(document.getElementById("balance").innerHTML);
  balancenow += winamount - 2;
  document.getElementById("balance").innerHTML = balancenow.toString();
}

if (balancenow <= 0) window.alert("You are broke");
