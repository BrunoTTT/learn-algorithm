class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size++;

      return this;
    }

    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.size++;

    return this;
  }

  insertAt(index, value) {
    if (index >= this.size) {
      throw new Error('Index out of range');
    }

    const node = new Node(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;

      return this;
    }

    let currentNode = this.head;
    for (let position = 0; position < index; position++) {
      currentNode = currentNode.next;
    }

    node.next = currentNode;
    node.previous = currentNode.previous;
    currentNode.previous.next = node;
    currentNode.previous = node;
    this.size++;

    return this;
  }

  removeAt(index) {
    if (index >= this.size) {
      throw new Error('Index out of range');
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.next.previous = null;
      this.size--;

      return this;
    }

    let currentNode = this.head;
    for (let position = 0; position < index; position++) {
      currentNode = currentNode.next;
    }

    const nextNode = currentNode.next;
    const previousNode = currentNode.previous;

    currentNode.next.previous = previousNode;
    currentNode.previous.next = nextNode;
  }

  print(node = this.head) {
    if (!node) return this;

    process.stdout.write(`${(node === this.head) ? '': ' <->'} ${node.value}`);

    this.print(node.next);
  }
}

const dlk = new DoublyLinkedList();
dlk
  .append(4)
  .append(6)
  .append(8)
  .append(10);

console.log(dlk.size);
dlk.removeAt(2);
dlk.print();
