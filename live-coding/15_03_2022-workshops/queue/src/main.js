const Queue = require('./Queue');

const q = new Queue();

q.enqueue(10)
  .enqueue(99)
  .enqueue(180)
  .enqueue(27);

console.log('Dequeue:', q.dequeue(), q);

q.enqueue(9);
q.enqueue(18);
console.log(q.dequeue(), q.head(), q.tail(), q);
