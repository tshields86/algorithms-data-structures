class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  /* Inserts the specified element into this queue. */
  enqueue(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
    return ++this.size;
  }

  /* Retrieves and removes the head of this queue. */
  dequeue() {
    if (this.isEmpty()) return;
    const oldHead = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next
      oldHead.next = null;
    }
    this.size--;
    return oldHead.value;
  }

  /* Retrieves, but does not remove, the head of this queue. */
  peek() {
    if (this.isEmpty()) return;
    return this.head.value;
  }

  /* Returns true if this queue is empty. */
  isEmpty() {
    return this.size === 0;
  }
};

module.exports = Queue;