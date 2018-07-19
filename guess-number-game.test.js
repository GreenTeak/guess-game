let GuessNumberGame = require("./guess-number-guess")

describe("GuessNumberGame",function () {
    it('should  return 4A0B for input 1 2 3 4 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("1 2 3 4")).toEqual("4A0B")

    });
    

});