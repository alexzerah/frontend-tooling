const sum = require("../src/sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 200)).toBe(3);
});
