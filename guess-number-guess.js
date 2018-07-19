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

    test(input){
        const numberA = this.PostionIsTure(input);
        return `${numberA}A${this.numberIsTure(input) - numberA}B`;
    }

}
module.exports = GuessNumberGame;