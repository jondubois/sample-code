
let description = 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.';

let aCount = 0;
for (let char of description) {
  if (char === 'a' || char === 'A') {
    aCount++;
  }
}

console.log('The character "a" appeared', aCount, 'times!');

let sCount = 0;
for (let char of description) {
  if (char === 's' || char === 'S') {
    sCount++;
  }
}

console.log('The character "s" appeared', sCount, 'times!');

let commaCount = 0;
for (let char of description) {
  if (char === ',') {
    commaCount++;
  }
}

console.log('The character "," appeared', commaCount, 'times!');
