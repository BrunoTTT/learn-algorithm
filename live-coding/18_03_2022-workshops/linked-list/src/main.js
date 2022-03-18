// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
//
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//
//   append(value) {
//     const node = new Node(value);
//
//     if (this.head == null) {
//       this.head = node;
//       this.size++;
//       return this;
//     }
//
//     let current = this.head
//     while (current.next) {
//       current = current.next;
//     }
//
//     current.next = node;
//     this.size++;
//     return this;
//   }
//
//   insertAt(value, position) {
//     if (position < 0 || position > this.size) {
//       throw new Error('invalid index');
//     }
//
//
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #size = 0;
  #head = null;

  /** Getters */
  get head() {
    return this.#head;
  }

  get size() {
    return this.#size;
  }

  /** Setters */
  set head(node) {
    this.#head = node;
  }

  set size(size) {
    this.#size = size;
  }

  tail(node = this.head) {
    if (!node.next) return node;

    return this.tail(node.next);
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.size++;
      return this;
    }

    this.tail().next = node;
    this.size++;

    return this;
  }

  /** Recursive Form */
  // insertAt(value, index, current = this.head) {
  //   if (index < 0 || index >= this.size) {
  //     throw new Error('Index out of range.');
  //   }
  //
  //   const node = new Node(value);
  //
  //   /** Swap */
  //   if (index === 1) {
  //     let tempNode = current.next;
  //     node.next = tempNode;
  //     current.next = node;
  //
  //     this.size++;
  //     return this;
  //   }
  //
  //   /** Insert at head */
  //   if (index === 0) {
  //     node.next = current;
  //     this.head = node;
  //
  //     this.size++;
  //     return this;
  //   }
  //
  //   if (current.next === null) {
  //     current.next = node;
  //     this.size++;
  //     return this;
  //   }
  //
  //   return this.insertAt(value, index - 1, current.next);
  // }

  /** Iteration Form */
  insertAt(value, index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range.');
    }

    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;

      return this;
    }

    let position = 0;
    let current = this.head;
    let previous = null;
    while (position < index) {
      position++;
      previous = current;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;

    return this;
  }

  removeAt(index) {

  }

  // removeAt(index) {
  //   if (index < 0 || index >= this.size) {
  //     throw new Error('Index out of range.');
  //   }
  //
  //   let current = this.head;
  //   if (index === 0) {
  //     this.head = current.next;
  //     this.size--;
  //     return this;
  //   }
  //
  //   let position = 0;
  //   let previous = null;
  //   while(position < index) {
  //     position++;
  //     previous = current;
  //     current = current.next;
  //   }
  //
  //   previous.next = current.next;
  //   this.size--;
  //
  //   return this;
  // }

  insertAt(index, value, current = this.head) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range.');
    }

    const node = new Node(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;

      return this;
    }

    if (index === 1) {
      node.next = current.next;
      current.next = node;
      this.size++;

      return this;
    }

    this.insertAt(index - 1, value, current.next);
  }

  removeAt(index, current = this.head) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of range.');
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return this;
    }

    /**
     * Given the following LinkedList, 4 -> 6 -> 8 -> 10 -> null
     *
     * removeAt(3) will produce the following calls:
     *
     *   1. removeAt(2, 6); // index - 1 = 2, current.next = 6
     *   2. removeAt(1, 8); // index - 1 = 1, current.next = 8
     *
     * When the index reach 1, it mean that we finally arrived at the targeted node
     * We can now remove it with the following statement,
     *
     *   current.next = current.next.next
     */
    if (index === 1) {
      current.next = current.next.next;
      this.size--;
      return this;
    }

    return this.removeAt(index - 1, current.next);
  }

  print(node = this.head) {
    if (!node) return this;
    if (node === this.head) {
      process.stdout.write(`LinkedList(${this.size}): `)
    }

    process.stdout.write(`${node.value} -> `);
    if (node.next === null)
      process.stdout.write('null');

    this.print(node.next);
  }

  isEmpty() {
    return this.size <= 0;
  }
}

const lk = new LinkedList();
lk
  .append(4)
  .append(6)
  .append(8)
  .append(10);

lk.removeAt(4);
lk.print();
