let GuessNumberGame = require("./guess-number-guess")

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

});