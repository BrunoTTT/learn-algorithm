class Stack {
    values = [];

    // Adds a new element at the top of the Stack
    push(element) {
      this.values.push(element);

      return this;
    }

    // Removes an Returns the top item of the Stack
    pop() {
      return this.values.pop();
    }

    // Returns the top item of the Stack
    peek() {
      return this.values[this.values.length - 1];
    }

    // Remove all the elements of the Stack
    clear() {
      this.values = [];
    }

    // Returns the length of the Stack
    size() {
      return this.values.length;
    }

    // Returns true if the Stack is empty, false otherwise
    isEmpty() {
      return this.values.length <= 0;
    }
}

module.exports = Stack;
