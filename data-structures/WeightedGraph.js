const PriorityQueue = require('./PriorityQueue');

class WeightedGraph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (this.adjList.has(vertex)) return;
    this.adjList.set(vertex, new Map());
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjList.has(vertex2)) this.addVertex(vertex2);
    this.adjList.get(vertex1).set(vertex2, weight);
    this.adjList.get(vertex2).set(vertex1, weight);
  }

  addDirectedEdge(vertex1, vertex2, weight = 0) {
    if (!this.adjList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjList.has(vertex2)) this.addVertex(vertex2);
    this.adjList.get(vertex1).set(vertex2, weight);
  }

  removeVertex(vertex) {
    if (!this.adjList.has(vertex)) return;
    this.adjList.get(vertex)
      .forEach(neighbor => this.removeEdge(vertex, neighbor));
    for (let [neighbor] of this.adjList.get(vertex)) {
      this.removeEdge(vertex, neighbor);
    }
    this.adjList.delete(vertex);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjList.has(vertex1)) this.adjList.get(vertex1).delete(vertex2);
    if (this.adjList.has(vertex2)) this.adjList.get(vertex2).delete(vertex1);
  }

  dijkstra(start, end) {
    const weights = new Map();
    const previous = new Map();
    const vertices = new PriorityQueue();

    for (let [vertex] of this.adjList) {
      previous.set(vertex, null);
      weights.set(vertex, vertex === start ? 0 : Infinity);
      vertices.enqueue(vertex, vertex === start ? 0 : Infinity);
    }

    while (!vertices.isEmpty()) {
      const vertex = vertices.dequeue();
      if (vertex === end) break;

      for (let [current, weight] of this.adjList.get(vertex)) {
        const totWeight = weights.get(vertex) + weight;
        if (totWeight < weights.get(current)) {
          weights.set(current, totWeight);
          previous.set(current, vertex);
          vertices.enqueue(current, totWeight);
        }
      }
    }

    const weight = weights.get(end);
    const path = [end];
    let prev = previous.get(end);
    while (prev) {
      path.push(prev);
      prev = previous.get(prev);
    }
    path.reverse();

    return {
      path,
      weight
    }
  }
};

module.exports = WeightedGraph;