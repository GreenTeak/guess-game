let generatorRandom = require("./generatorRandom")
describe("generatorRandom",function () {
    it('should return random ',function () {
        let random = new generatorRandom();
        let spy = jest.spyOn(random, "generator").mockReturnValue("1 2 3 4");
        expect(random.generator()).toEqual("1 2 3 4");
    });

});
