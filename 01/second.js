const { input } = require('./input');

let count = 0;
for (let i = 0; i < input.length; i++) {
  let curr = createSum(input, i);
  let next = createSum(input, i + 1);
  if (next > curr) count++;
}

function createSum(input, j) {
  if (j > input.length - 2) return 0;
  return input[j] + input[j + 1] + input[j + 2];
}

console.log('Solution: ', count);