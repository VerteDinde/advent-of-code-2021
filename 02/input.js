const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .split('\n')
  .map(s => {
    const pair = s.split(' ');
    const direction = (pair[0] === 'up' || pair[0] === 'down') ? 'depth' : pair[0];
    const value = (pair[0] === 'up') ? parseInt(-pair[1], 10) : parseInt(pair[1], 10);
    return { direction, value };
  });

module.exports = { input };