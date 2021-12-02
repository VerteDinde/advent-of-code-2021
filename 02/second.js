const { input } = require('./input');

let depth = 0
let position = 0;
let aim = 0;

for (let i = 0; i < input.length; i++) {
  const tick = input[i];
  if (tick.direction === 'depth') {
    aim += tick.value;
  }
  if (tick.direction === 'forward') {
    position += tick.value;
    depth += aim * tick.value;
  }
}

console.log('Solution (depth * position): ', depth * position);