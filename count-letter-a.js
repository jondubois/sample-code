
let description = 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.';

let aCount = 0;
for (let char of description) {
  if (char === 'a' || char == 'A') {
    aCount++;
  }
}

console.log('The character "a" appeared', aCount, 'times!');
