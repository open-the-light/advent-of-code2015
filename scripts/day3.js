const fs = require('fs');

const data = fs.readFileSync('../data/input_day3.txt', 'utf8').toString();

let x1 = data.length / 2;
let x2 = data.length / 2;
let y1 = data.length / 2;
let y2 = data.length / 2;

let arr = new Array(data.length)
  .fill(0)
  .map(() => new Array(data.length).fill(0));

arr[x1][y1] = 1;

for (let i = 0; i < data.length; i++) {
  const c = data[i];
  if (i % 2 === 0) {
    if (c === '>') {
      x1 += 1;
    } else if (c === 'v') {
      y1 += 1;
    } else if (c === '<') {
      x1 -= 1;
    } else {
      y1 -= 1;
    }
    arr[x1][y1] += 1;
  } else {
    if (c === '>') {
      x2 += 1;
    } else if (c === 'v') {
      y2 += 1;
    } else if (c === '<') {
      x2 -= 1;
    } else {
      y2 -= 1;
    }
    arr[x2][y2] += 1;
  }
}

let total = 0;
arr.forEach((a) => {
  a.forEach((v) => {
    if (v !== 0) {
      total++;
    }
  });
});

console.log(total);
