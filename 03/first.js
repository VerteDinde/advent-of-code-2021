const { input } = require('./input');

let g, e;
let c = {
  b0: { zero: 0, one: 0 },
  b1: { zero: 0, one: 0 },
  b2: { zero: 0, one: 0 },
  b3: { zero: 0, one: 0 },
  b4: { zero: 0, one: 0 },
  b5: { zero: 0, one: 0 },
  b6: { zero: 0, one: 0 },
  b7: { zero: 0, one: 0 },
  b8: { zero: 0, one: 0 },
  b9: { zero: 0, one: 0 },
  b10: { zero: 0, one: 0 },
  b11: { zero: 0, one: 0 },
}

for (let i = 0; i < input.length; i++) {
  const bits = input[i].split('').map(i => i);
  for (let j = 0; j < bits.length; j++) {
    const key = `b${j}`;
    switch (bits[j]) {
      case '0':
        c[key].zero += 1;
        break;
      case '1':
        c[key].one += 1;
        break
      default:
        console.error('Unknown bit value');
    }
  }
}

let gArr = [];
let eArr = [];
for (let [, value] of Object.entries(c)) {
  (value.zero > value.one) ? gArr.push('0') : gArr.push('1');
  (value.zero < value.one) ? eArr.push('0') : eArr.push('1');
}

g = parseInt(gArr.join(''), 2);
e = parseInt(eArr.join(''), 2);

console.log(`Gamma: ${g}, Epsilon: ${e}`);
console.log(`Solution: ${g * e}`);