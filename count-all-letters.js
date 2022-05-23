
let description = 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.';

function countCharacter(message, character) {
  let charCount = 0;
  for (let char of message) {
    if (char.toUpperCase() === character.toUpperCase()) {
      charCount++;
    }
  }
  return charCount;
}

let allLetters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

for (let letter of allLetters) {
  let letterCount = countCharacter(description, letter);
  console.log(`The letter "${letter}" appeared ${letterCount} times!`);
}
