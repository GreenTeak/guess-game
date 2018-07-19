let InvalidInput = require("./invalid-input")
var scanf = require('scanf')

class GuessNumberGame {

    constructor(){
        this.answer = "1 2 3 4";
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
    invalidisTrue(){
        let inputs = scanf("%s");
        //let inputs = "1 5 6 7";
        let invalidInput = new InvalidInput(inputs);
        while(!invalidInput){
            //inputs = "1 5 6 7";
           inputs = scanf("%s");
           invalidInput = new InvalidInput(inputs);
        }
        return inputs;
    }
    test(input) {
        const numberA = this.PostionIsTure(input);
        return `${numberA}A${this.numberIsTure(input) - numberA}B`;
    }
    /*App(){
        let count = 6;
        let output = "";
        while (count--){
            let inputs = this.invalidisTrue();
            if(inputs == this.answer){
                output = "Win";
                break;
            }
            output = test(inputs);
        }
        output = "game over";
    }*/
}
module.exports = GuessNumberGame;