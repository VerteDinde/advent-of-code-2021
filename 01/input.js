const path = require('path');
const fs = require('fs');

// TODO: This is ugly as shit, come back and pretty it up
const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n').filter(i => i !== '').map(Number);
module.exports = { input };