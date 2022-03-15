const PriorityQueue = require('./PriorityQueue');

const pq = new PriorityQueue();

pq.enqueue(12, 15);
pq.enqueue(2, 1);
pq.enqueue(10, 15);

console.log('Size:', pq.size(), pq.tail(), pq.head(), pq);
