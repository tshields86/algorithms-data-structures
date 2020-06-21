class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  /* Pushes an element onto the stack represented by this list. */
  push(value) {
    if (this.isEmpty()) this.top = new Node(value);
    else this.top = new Node(value, this.top);
    return ++this.size;
  }

  /* Pops an element from the stack represented by this list. */
  pop() {
    if (this.isEmpty()) return;
    const oldTop = this.top;
    this.top = this.top.next;
    oldTop.next = null;
    this.size--;
    return oldTop.value;
  }

  /* Retrieves, but does not remove, the top (last element) of this list. */
  peek() {
    if (this.isEmpty()) return;
    return this.top.value;
  }

  /* Returns true if this list is empty. */
  isEmpty() {
    return this.size === 0;
  }
};

module.exports = Stack;