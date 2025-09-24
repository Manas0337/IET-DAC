
const fs = require('fs');

const filename = 'example.txt';
const data = 'Hello, this is synchronous file write and read!';

fs.writeFileSync(filename, data);
console.log('Data written synchronously.');

const readData = fs.readFileSync(filename, 'utf-8');
console.log('Data read synchronously:', readData);
