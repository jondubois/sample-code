

let message = 'This is a message';

function foo(message) {
  message = 'DIFFERENT MESSAGE!';
}

foo();
console.log(message);
