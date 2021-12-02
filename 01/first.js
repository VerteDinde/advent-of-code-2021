const { input } = require('./input');

let count = 0;
for (let i = 0; i < input.length; i++) {
  let curr = input[i];
  let next = input[i + 1];
  if (next > curr) count++;
}

console.log('Solution: ', count);