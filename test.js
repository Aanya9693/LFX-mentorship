const assert = require("assert");
const processList = require("./index").default;

// Test case 1: Valid input
const inputList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const expectedOutput1 = [1, 5, 7, 11, 13, 17, 19];

assert.deepStrictEqual(processList(inputList1), expectedOutput1);

// Test case 2: Invalid input (not a multiple of 10 in length)
const inputList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
assert.throws(() => processList(inputList2), Error);

console.log("All tests passed!");
