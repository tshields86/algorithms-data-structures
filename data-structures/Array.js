class MockArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  get(index) {
    return this.data[index];
  }

  set(index, item) {
    if (this.data[index] === undefined) return;
    return this.data[index] = item;
  }

  push(item) {
    this.data[this.length] = item;
    return ++this.length;
  }

  pop() {
    if (!this.length) return;
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  remove(index) {
    if (this.data[index] === undefined) return;
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shift() {
    if (!this.length) return;
    const item = this.data[0];
    this.shiftItems(0);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  insert(index, item) {
    if (this.data[index] === undefined) return;
    this.unshiftItems(index);
    return this.data[index] = item;
  }

  unshift(item) {
    this.unshiftItems(0);
    this.data[0] = item;
    return this.length;
  }

  unshiftItems(index) {
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.length++;
  }
};

module.exports = MockArray;