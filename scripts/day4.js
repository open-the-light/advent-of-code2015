const md5 = require('md5');

let num = 0;
while (true) {
  let attempt = 'ckczppom' + num.toString();
  let m = md5(attempt);
  let start = m.slice(0, 6);
  if (start === '000000') {
    console.log(m);
    console.log(num);
    break;
  }
  num++;
}
