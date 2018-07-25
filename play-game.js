'use strict'
const GuessNumberGame = require("./guess-number-guess")
const GeneratorRandom = require("./generateRandom")

const generatorRandom = new GeneratorRandom();
let guessNumber = new GuessNumberGame(generatorRandom);
let results = [];

document.getElementById("submit").addEventListener("click", function inputNumber() {
    let history = document.getElementById("history");
    if (results.length === 0) {
        history.innerHTML = "<tr><td>输入</td><td>输出</td></tr>"
    }
    const input = document.getElementById("input").value.split('').join(' ');
    let result = guessNumber.test(input)

    results.push({input});

    history.innerHTML += `<tr><td>${input}</td><td>${result}</td></tr>`;
})

function clearGame() {
    results = [];
    guessNumber = new GuessNumberGame(generator);
}
