let GuessNumberGame = require("./guess-number-guess")
let InvalidInput = require("./invalid-input")

describe("GuessNumberGame",function () {
    it('should  return 4A0B for input 1 2 3 4 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("1 2 3 4")).toEqual("4A0B")

    });
    it('should return 3A0B for input 1 2 3 5 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("1 2 3 5")).toEqual("3A0B");
    })
    it('should return 0A4B for input 4 3 2 1 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("4 3 2 1")).toEqual("0A4B");

    })
    it('should return 2A2B for input 1 2 4 3 when answer is 1 2 3 4',function () {
        expect(new GuessNumberGame().test("1 2 4 3")).toEqual("2A2B");

    })
    /*it("should print Wrong Input，Input again when input is 1 2 3 4",function () {
        let guessnumber = new  GuessNumberGame();
        guessnumber.test("1 2 a b");
        expect(spy.calledWith("Wrong Input，Input again")).to.be.ok;
    })*/
    /*it('should return game over for input 1 3 2 4 six times',function () {
        expect(new GuessNumberGame().App("1 5 6 7")).toEqual("1A0B");
        expect(new GuessNumberGame().App("1 5 6 7")).toEqual("1A0B");
        expect(new GuessNumberGame().App("1 5 6 7")).toEqual("1A0B");
        expect(new GuessNumberGame().App("1 5 6 7")).toEqual("1A0B");
        expect(new GuessNumberGame().App("1 5 6 7")).toEqual("game over");
    })*/

});