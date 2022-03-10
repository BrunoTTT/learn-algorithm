type Queue<T> = { [key: string]: T[] }

class PriorityQueue<T> {
  private queue: Queue<T> = {};
  private _size: number = 0;

  enqueue(value: T, priority: number): void {
    if (!this.queue[priority]) {
      this.queue[priority] = [];
    }

    this.queue[priority].unshift(value);
    this._size++;
  }

  dequeue(): T {
    const [highestPriority] = Object.keys(this.queue);
    if (highestPriority === undefined) {
        return null;
    }

    const value = this.queue[highestPriority].shift();
    if (this.queue[highestPriority].length === 0) {
      delete this.queue[highestPriority];
    }

    this._size--;
    return value;
  }

  head(): T {
    const [highestPriority] = Object.keys(this.queue);
    if (highestPriority === undefined) {
      return null;
    }

    return this.queue[highestPriority][0];
  }

  tail(): T {
    const [lowestPriority] = Object.keys(this.queue).reverse();
    if (lowestPriority === undefined) {
      return null;
    }

    const lowestQueue = this.queue[lowestPriority];
    return lowestQueue[lowestQueue.length - 1];
  }

  size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }
}

export default PriorityQueue;
