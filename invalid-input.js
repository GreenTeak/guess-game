class InvalidInput {
    invalididtnify(input) {
        let invalid = "Wrong Input，Input again";
        let inputs = input.split(" ");
        if (inputs.length != 4) {
            console.log(invalid);
            return false;
        }
        for (let i = 0; i < inputs.length;)
            for (let indexi = 0; indexi < 4; indexi++) {
                for (let indexj = 0; indexj < 4; indexj++) {
                    if (indexi != indexj && input[indexi] === input[indexj]) {
                        console.log(invalid);
                        return false;
                    }
                }
            }
        for (let index = 0; index < input.length; index++) {
            if (+input.charCodeAt(index) >= 0 && +input.charCodeAt(index) <= 9) {
                continue;
            }else{
                console.log(invalid);
                return false;
            } ;
        }
    }
}

module.exports = InvalidInput;