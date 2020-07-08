const Queue = require('./Queue');
const Stack = require('./Stack');

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (this.adjList.has(vertex)) return;
    this.adjList.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjList.has(vertex2)) this.addVertex(vertex2);
    this.adjList.get(vertex1).add(vertex2);
    this.adjList.get(vertex2).add(vertex1);
  }

  addDirectedEdge(vertex1, vertex2) {
    if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjList.has(vertex2)) this.addVertex(vertex2);
    this.adjList.get(vertex1).add(vertex2);
  }

  removeVertex(vertex) {
    if (!this.adjList.has(vertex)) return;
    this.adjList.get(vertex)
      .forEach(neighbor => this.removeEdge(vertex, neighbor));
    this.adjList.delete(vertex);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjList.has(vertex1)) this.adjList.get(vertex1).delete(vertex2);
    if (this.adjList.has(vertex2)) this.adjList.get(vertex2).delete(vertex1);
  }

  bfs(start) {
    if (!this.adjList.has(start)) return;
    const result = [];
    const explored = new Set([start]);
    const queue = new Queue();
    queue.enqueue(start);

    while (!queue.isEmpty()) {
      const vertex = queue.dequeue();
      result.push(vertex);
      this.adjList.get(vertex).forEach(neighbor => {
        if (explored.has(neighbor)) return;
        queue.enqueue(neighbor);
        explored.add(neighbor);
      });
    }

    return result;
  }

  dfs(start) {
    if (!this.adjList.has(start)) return;
    const result = [];
    const explored = new Set([start]);
    const stack = new Stack();
    stack.push(start);

    while (!stack.isEmpty()) {
      const vertex = stack.pop();
      result.push(vertex);
      this.adjList.get(vertex).forEach(neighbor => {
        if (explored.has(neighbor)) return;
        stack.push(neighbor);
        explored.add(neighbor);
      });
    }

    return result;
  }

  dfsRecursive(vertex, result = [], explored = new Set()) {
    if (!this.adjList.has(vertex)) return;
    result.push(vertex);
    explored.add(vertex);

    this.adjList.get(vertex).forEach(neighbor => {
      if (explored.has(neighbor)) return;
      this.dfsRecursive(neighbor, result, explored);
    });

    return result;
  }
};

module.exports = Graph;