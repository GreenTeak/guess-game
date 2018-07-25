class InvalidInput {
    invalididtnify(input) {
        let invalid = "Wrong Input，Input again";
        const inputs = input.split(' ');
        const charCodes = inputs.filter(a => a.charCodeAt(0) > 57 || a.charCodeAt(0) < 48)
        return inputs.length === 4 && charCodes.length === 0;
    }
}

if (typeof module !== "undefined") {
    module.exports = InvalidInput;
}

if (typeof window !== "undefined") {
    window.InvalidInput = InvalidInput
}