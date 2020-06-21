class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }

  /* Enqueues an element onto the queue represented by this list. */
  enqueue(value) {
    if (this.isEmpty()) this.first = this.last = new Node(value);
    else this.last = this.last.next = new Node(value);
    return ++this.size;
  }

  /* Dequeues an element from the queue represented by this list. */
  dequeue() {
    if (this.isEmpty()) return;
    const oldFirst = this.first;
    if (this.length === 1) this.first = this.last = null;
    else {
      this.first = this.first.next
      oldFirst.next = null;
    }
    this.size--;
    return oldFirst.value;
  }

  /* Retrieves, but does not remove, the first (first element) of this list. */
  peek() {
    if (this.isEmpty()) return;
    return this.first.value;
  }

  /* Returns true if this list is empty. */
  isEmpty() {
    return this.size === 0;
  }
};

module.exports = Queue;