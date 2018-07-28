'use strict'
const GuessNumberGame = require("./guess-number-guess")
const GeneratorRandom = require("./generateRandom")

const generatorRandom = new GeneratorRandom();
let guessNumber = new GuessNumberGame(generatorRandom);
let results = [];

document.getElementById("submit").addEventListener("click", function inputNumber() {
    let history = document.getElementById("history");
    let message = document.getElementById("message");
    if (results.length === 0) {
        history.innerHTML = "<tr><td>输入</td><td>输出</td></tr>"
    }
    message.innerHTML="";
    const input = document.getElementById("input").value;
    let result = guessNumber.test(input)

    results.push({input});
    history.innerHTML += `<tr><td>${input}</td><td>${result}</td></tr>`;
    if(result === "4A0B"){
        message.innerHTML = `<div><h3>You win</h3></div>`;
        clearGame()
    }
    if(results.length > 5){
        message.innerHTML = `<div><h3>Game over</h3></div>`
       clearGame()
    }
})

function clearGame() {
    results = [];
    guessNumber = new GuessNumberGame(generatorRandom);
}
