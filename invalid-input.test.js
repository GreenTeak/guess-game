let InvalidInput = require("./invalid-input")
describe("InvalidInput",function () {
    it('should return false when input is 1 2 a b',function () {
        expect(new InvalidInput().invalididtnify("1 2 a b")).toEqual(false);
    });

});