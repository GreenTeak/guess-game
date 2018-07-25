let GuessNumberGame = require("./guess-number-guess")
let InvalidInput = require("./invalid-input")
let GeneratorRandom = require("./generateRandom")
let InputStream = require("./inputStream")

describe("GuessNumberGame",function () {
    let guess;
    let inputStream;
    beforeEach(()=>{
        let generatorRandom =new GeneratorRandom();
        let spy1 = jest.spyOn(GeneratorRandom.prototype, "generator").mockReturnValue("1 2 3 4");
        guess = new GuessNumberGame(generatorRandom);
    });
    it('should  return 4A0B for input 1 2 3 4 when answer is 1 2 3 4',function () {
        expect(guess.test("1 2 3 4")).toEqual("4A0B")

    });
    it('should return 3A0B for input 1 2 3 5 when answer is 1 2 3 4',function () {
        expect(guess.test("1 2 3 5")).toEqual("3A0B");
    });
    it('should return 0A4B for input 4 3 2 1 when answer is 1 2 3 4',function () {
        expect(guess.test("4 3 2 1")).toEqual("0A4B");

    });
    it('should return 2A2B for input 1 2 4 3 when answer is 1 2 3 4',function () {
        expect(guess.test("1 2 4 3")).toEqual("2A2B");

    });
    it("should print Wrong Input，Input again when input is 1 2 ab",function () {
        expect(guess.test("1 2 a b")).toEqual("Wrong Input，Input again");
    })
    it("should print Wrong Input，Input again when input is 1 2 a b",function () {
        expect(guess.test("1 2 c c")).toEqual("Wrong Input，Input again");
    })
    it('should return game over for input 1 3 2 4 six times',function () {
        expect(guess.test("5 6 7 8")).toEqual("0A0B");
        expect(guess.test("5 6 7 8")).toEqual("0A0B");
        expect(guess.test("5 6 7 8")).toEqual("0A0B");
        expect(guess.test("5 6 7 8")).toEqual("0A0B");
        expect(guess.test("5 6 7 8")).toEqual("0A0B");
        expect(guess.test("5 6 7 8")).toEqual("game over");
    })

});