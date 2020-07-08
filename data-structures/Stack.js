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

  /* Pushes an item onto the top of this stack. */
  push(value) {
    if (this.isEmpty()) this.top = new Node(value);
    else this.top = new Node(value, this.top);
    return ++this.size;
  }

  /* Removes the object at the top of this stack and returns that object as the value of this function. */
  pop() {
    if (this.isEmpty()) return; /* TODO: EmptyStackException - if this stack is empty */
    const oldTop = this.top;
    this.top = this.top.next;
    oldTop.next = null;
    this.size--;
    return oldTop.value;
  }

  /* Looks at the object at the top of this stack without removing it from the stack. */
  peek() {
    if (this.isEmpty()) return; /* TODO: EmptyStackException - if this stack is empty */
    return this.top.value;
  }

  /* Returns true if and only if this stack contains no items; false otherwise. */
  isEmpty() {
    return this.size === 0;
  }
};

module.exports = Stack;