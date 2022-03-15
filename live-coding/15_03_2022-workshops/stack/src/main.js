const Stack = require('./Stack');

const s = new Stack();

s.push(10)
  .push(99)
  .push(180)
  .push(27);

console.log('Pop:', s.pop());
console.log('Pop:', s.pop());

console.log('Peek:', s.peek());

console.log('isEmpty:', s.isEmpty(), s);

s.clear();
console.log('Clear:', s);

console.log('isEmpty:', s.isEmpty());
