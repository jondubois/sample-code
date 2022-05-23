let descriptions = [
  'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  'C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language',
  'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.'
];

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

for (let desc of descriptions) {
  console.log(`"${desc}"`);
  for (let letter of allLetters) {
    let letterCount = countCharacter(desc, letter);
    console.log(`The letter "${letter}" appeared ${letterCount} times!`);
  }
  console.log('');
}
