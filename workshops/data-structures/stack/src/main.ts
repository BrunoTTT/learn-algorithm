import PriorityQueue from './PriorityQueue';

class Queue<T> {
  private values: T[] = []

  enqueue(value: T): void {
    this.values.unshift(value);
  }

  dequeue(): T {
    return this.values.shift();
  }

  head(): T {
    return this.values[0];
  }

  tail(): T {
    return this.values[this.values.length - 1];
  }

  size(): number {
    return this.values.length;
  }

  isEmpty(): boolean {
    return this.values.length === 0;
  }
}

const q = new PriorityQueue();
q.enqueue(100, 520);
q.enqueue(10, 2);
q.enqueue(25, 1);
q.enqueue(30, 2);
console.log(q.head(), q.tail());
console.log(q.isEmpty(), q.size());
console.log(q.dequeue(), q.dequeue(), q.dequeue(), q.dequeue(), q.dequeue());
console.log(q.isEmpty(), q.size());
// class StackNode<T> {
//   private value: T = null
//   private topNode: StackNode<T> = null
//
//   constructor(value: T) {
//     this.value = value;
//   }
//
//   setTopNode(node: StackNode<T>): void {
//     this.topNode = node;
//   }
//
//   getTopNode(): StackNode<T> {
//     return this.topNode;
//   }
// }
//
// class Stack<T> {
//   private head: StackNode<T> = null;
//
//   push(value: T): void {
//     const newNode = new StackNode<T>(value)
//
//     if (this.head === null) {
//       this.head = newNode;
//       return;
//     }
//
//     const lastNode = this.getLastNode()
//     lastNode.setTopNode(newNode);
//   }
//
//   getLastNode(): StackNode<T> {
//     let currentNode: StackNode<T> = this.head;
//
//     while(currentNode.getTopNode() !== null) {
//       currentNode = currentNode.getTopNode();
//     }
//
//     return currentNode;
//   }
// }
//
// // class Stack<T> {
// //   private values: T[] = [];
// //
// //   push(value: T): void {
// //     this.values.push(value);
// //   }
// //
// //   pop(): T {
// //     return this.values.pop();
// //   }
// //
// //   peek(): T {
// //     return this.values[this.values.length - 1];
// //   }
// //
// //   clear(): void {
// //     this.values = [];
// //   }
// //
// //   size(): number {
// //     return this.values.length;
// //   }
// //
// //   isEmpty(): boolean {
// //     return this.size() === 0;
// //   }
// // }
//
// function main() {
//   const s = new Stack<Number>();
//   s.push(10); // topNode: { value: 25, topNode: ...  }
//   s.push(25); // topNode: { value: 50, topNode: ...  }
//   s.push(50); // topNode: { value: 60, topNode: null }
//   s.push(60);
// }
//
// main();
