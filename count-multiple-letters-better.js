
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

console.log('The character "a" appeared', countCharacter(description, 'a'), 'times!');
console.log('The character "s" appeared', countCharacter(description, 's'), 'times!');
console.log('The character "," appeared', countCharacter(description, ','), 'times!');
