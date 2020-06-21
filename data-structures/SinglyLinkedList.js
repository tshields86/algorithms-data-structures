class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class SinglyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }

  _getNode(index) {
    if (index < 0 || index >= this.size()) return; /* TODO: Throw IndexOutOfBoundsException */
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  /* Inserts the specified element at the specified position in this list. */
  add(index, value) {
    if (index < 0 || index >= this.size()) return; /* TODO: Throw IndexOutOfBoundsException */
    if (index === 0) return this.insertFirst(value);
    if (index === this.length) return this.insertLast(value);

    const newNode = new Node(value);
    const beforeNode = this._getNode(index - 1);
    const afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    this.length++;
    return this;
  }

  /* Inserts the specified element at the beginning of this list. */
  addFirst(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.head = new Node(value, this.head);
    this.length++;
    return this;
  }

  /* Appends the specified element to the end of this list. */
  addLast(value) {
    if (this.isEmpty()) this.head = this.tail = new Node(value);
    else this.tail = this.tail.next = new Node(value);
    this.length++;
    return this;
  }

  /* Removes all of the elements from this list. */
  clear() {
    this.head = this.tail = null;
    this.length = 0;
    return this;
  }

  /* Returns true if this list contains the specified element. */
  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  /* Returns the element at the specified position in this list. */
  get(index) {
    if (index < 0 || index >= this.size()) return; /* TODO: Throw IndexOutOfBoundsException */
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.value;
  }

  /* Returns the first element in this list. */
  getFirst() {
    if (this.isEmpty()) return; /* TODO: Throw NoSuchElementException */
    return this.head.value;
  }

  /* Returns the last element in this list. */
  getLast() {
    if (this.isEmpty()) return; /* TODO: Throw NoSuchElementException */
    return this.tail.value;
  }

  /* Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element. */
  indexOf(value) {
    let node = this.head, i = 0;
    while (node) {
      if (node.value === value) return i;
      node = node.next;
      i++;
    }
    return -1;
  }

  /* Returns true if this list is empty. */
  isEmpty() {
    return this.length === 0;
  }

  /* Removes the element at the specified position in this list. */
  remove(index) {
    if (index < 0 || index >= this.size()) return; /* TODO: Throw NoSuchElementException */
    if (index === 0) return this.removeFirst();
    if (index === this.length - 1) return this.removeLast();

    const beforeNode = this._getNode(index - 1);
    const node = beforeNode.next;
    beforeNode.next = node.next;
    node.next = null;
    this.length--;
    return node.value;
  }

  /* Removes and returns the first element from this list. */
  removeFirst() {
    if (this.isEmpty()) return; /* TODO: Throw NoSuchElementException */
    const oldHead = this.head;
    if (this.length === 1) this.head = this.tail = null;
    else {
      this.head = this.head.next
      oldHead.next = null;
    };
    this.length--;
    return oldHead.value;
  }

  /* Removes and returns the last element from this list. */
  removeLast() {
    if (this.isEmpty()) return; /* TODO: Throw NoSuchElementException */
    const oldTail = this.tail;
    if (this.length === 1) this.head = this.tail = null;
    else {
      const beforeNode = this._getNode(this.length - 2);
      this.tail = beforeNode;
      this.tail.next = null;
    }
    this.length--;
    return oldTail.value;
  }

  /* Replaces the element at the specified position in this list with the specified element. */
  set(index, value) {
    if (index < 0 || index >= this.size()) return; /* TODO: Throw IndexOutOfBoundsException */
    const node = this._getNode(index);
    const oldValue = node.value;
    node.value = value;
    return oldValue;
  }

  /* Returns the number of elements in this list. */
  size() {
    return this.length;
  }

  /* Returns an array containing all of the elements in this list in proper sequence (from first to last element). */
  toArray() {
    const array = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  forEach(fxn) {
    if (this.isEmpty()) return;
    let node = this.head;
    while (node) {
      fxn(node.value);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }

  print() {
    this.forEach(console.log);
  }
}

module.exports = SinglyLinkedList;

const sll = new SinglyLinkedList();

sll.addFirst(2)
sll.addFirst(1)
sll.addLast(3)
sll.addLast(4)
console.log(sll.toArray()) // [ 1, 2, 3, 4 ]
console.log(sll.contains(3)) // true
console.log(sll.contains(5)) // false
console.log(sll.indexOf(3)) // 2
console.log(sll.indexOf(5)) // -1
sll.reverse()
console.log(sll.toArray()) // [ 4, 3, 2, 1 ]
console.log(sll.get(1)) // 3
sll.set(1, 5)
console.log(sll.get(1)) // 5
console.log(sll.toArray()) // [ 4, 5, 2, 1 ]
console.log(sll.get(1)) // 5
console.log(sll.getFirst()) // 4
console.log(sll.getLast()) // 1
console.log(sll.removeFirst()) // 4
console.log(sll.removeLast()) // 1
console.log(sll.toArray()) // [ 5, 2 ]
sll.add(1, 4)
console.log(sll.size()) // 3
console.log(sll.toArray()) // [ 5, 4, 2 ]
console.log(sll.isEmpty()) // false
sll.clear();
console.log(sll.size()) // 0
console.log(sll.isEmpty()) // true

