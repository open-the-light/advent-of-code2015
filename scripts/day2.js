const fs = require('fs');

const data = fs
  .readFileSync('../data/input_day2.txt', 'utf8')
  .toString()
  .split('\n');

const firstN = /(\d+)x/;
const secondN = /x(\d+)x/;
const thirdN = /x(\d+)$/;

let total = 0;
data.forEach((d) => {
  try {
    const x = parseInt(d.match(firstN)[1]);
    const y = parseInt(d.match(secondN)[1]);
    const z = parseInt(d.match(thirdN)[1]);
    let arr = [x, y, z].sort((a, b) => a - b).slice(0, 2);
    total += 2 * x * y + 2 * x * z + 2 * y * z + arr[0] * arr[1];
  } catch (error) {
    console.log('???');
  }
});

console.log(total);

let total2 = 0;
data.forEach((d) => {
  try {
    const x = parseInt(d.match(firstN)[1]);
    const y = parseInt(d.match(secondN)[1]);
    const z = parseInt(d.match(thirdN)[1]);
    let arr = [x, y, z].sort((a, b) => a - b).slice(0, 2);
    total2 += 2 * arr[0] + 2 * arr[1] + x * y * z;
  } catch (error) {
    console.log('???');
  }
});
console.log(total2);
