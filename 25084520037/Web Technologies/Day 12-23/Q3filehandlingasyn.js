const fs = require('fs');
const filename = 'example_async.txt';
const data = 'Hello, this is asynchronous file write and read!';

fs.writeFile(filename, data, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('Data written asynchronously.');

  fs.readFile(filename, 'utf-8', (err, readData) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('Data read asynchronously:', readData);
  });
});