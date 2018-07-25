let InvalidInput = require("./invalid-input")
// var scanf = require('scanf')

class GuessNumberGame {

    constructor(random){
        this.answer = random.generator();
        this.invalidInput = new InvalidInput();
        this.count = 6;
    }
    PostionIsTure(Input) {
        let Anumber = 0;
        let input = Input.split(" ");
        const answers = this.answer.split(" ");

        for (let i = 0; i < 4; i++){
            if(answers[i] == input[i]) {
                Anumber++;
            }
        }
        return Anumber;
    }
    numberIsTure(input){
        let numberB = 0;
        let inputs = input.split(" ");
        const answers = this.answer.split(" ");

        for (let i = 0; i < 4; i++){
            if(answers.includes(inputs[i])){
                numberB ++;
            }
        }
        return numberB;
    }
    test(input) {
        let count = 6;
        let output = "";
        let inputs = input;
        if(!this.invalidInput.invalididtnify(input))
            return "Wrong Input，Input again";
        if(inputs == this.answer){
            output = "Win";
        }
        output = `${this.PostionIsTure(input)}A${this.numberIsTure(input) - this.PostionIsTure(input)}B`;
        if(this.count === 1){
            output = "game over";
        }
        this.count--;
        return output;
    }
}
if (typeof module !== "undefined") {
    module.exports = GuessNumberGame;
}

if (typeof window !== "undefined") {
    window.GuessNumberGame = GuessNumberGame
}