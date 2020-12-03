const fs = require('fs');

const data = fs.readFileSync('../data/input_day1.txt', 'utf8').toString();

let floor = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] === '(') {
    floor++;
  } else {
    floor--;
  }
  if (floor < 0) {
    console.log(i + 1);
    break;
  }
}
console.log(floor);
