class HashTable {
  constructor(length = 100) {
    this.map = new Array(length);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++)
      hash = Math.imul(31, hash) + key.charCodeAt(i) | 0;
    return Math.abs(hash) % this.map.length;
  }

  set(key, value) {
    const idx = this._hash(key);
    if (!this.map[idx]) this.map[idx] = [];
    const pair = [key, value];

    for (let i = 0; i < this.map[idx].length; i++) {
      let [storedKey] = this.map[idx][i];
      if (storedKey === key) {
        this.map[idx][i] = pair;
        this.size++;
        return this.map;
      }
    }

    this.map[idx].push(pair);
    this.size++;
    return this.map;
  }

  get(key) {
    const idx = this._hash(key);
    if (this.map[idx]) {
      for (let i = 0; i < this.map[idx].length; i++) {
        let [storedKey, storedValue] = this.map[idx][i];
        if (storedKey === key) return storedValue;
      }
    }
    return;
  }

  has(key) {
    const idx = this._hash(key);
    if (this.map[idx]) {
      for (let i = 0; i < this.map[idx].length; i++) {
        let [storedKey] = this.map[idx][i];
        if (storedKey === key) return true;
      }
    }
    return false;
  }

  delete(key) {
    const idx = this._hash(key);
    if (this.map[idx]) {
      for (let i = 0; i < this.map[idx].length; i++) {
        let [storedKey] = this.map[idx][i];
        if (storedKey === key) {
          this.map[idx].splice(i, 1);
          this.size--;
        }
      }
    }
    return;
  }

  entries(){
    const entries = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        for (let j = 0; j < this.map[i].length; j++) {
          entries.push(this.map[i][j]);
        }
      }
    }
    return entries;
  }

  keys(){
    const keys = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        for (let j = 0; j < this.map[i].length; j++) {
          keys.push(this.map[i][j][0]);
        }
      }
    }
    return keys;
  }

  values(){
    const values = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        for (let j = 0; j < this.map[i].length; j++) {
          values.push(this.map[i][j][1]);
        }
      }
    }
    return values;
  }
};

module.exports = HashTable;