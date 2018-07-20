let InvalidInput = require("./invalid-input")
let generatorRandom = require("./generatorRandom")
var scanf = require('scanf')

class GuessNumberGame {

    constructor(random){
        this.answer = random;
        //console.log(this.answer," aa" ,this.answer.length);
        this.invalidInput = new InvalidInput();
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
        const numberA = this.PostionIsTure(input);
        return `${numberA}A${this.numberIsTure(input) - numberA}B`;
    }
    App(){
        let count = 6;
        let output = "";
        let inputs = scanf("%s");
        while (count--){
            while (!this.invalidInput.invalididtnify(inputs)){
                inputs = scanf("%s");
            }
            if(inputs == this.answer){
                output = "Win";
                break;
            }
            output = test(inputs);
        }
        output = "game over";
    }
}
module.exports = GuessNumberGame;