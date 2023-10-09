"use strict";

class Graph {
  constructor(graph) {
    this.graph = graph;
  }
  addVertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    this.graph[vertex1].push(vertex2);
    this.graph[vertex2].push(vertex1);
  }
  BFS(source) {
    let queue = [source];
    let result = [];
    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current);
      for (let neighbor of this.graph[current]) {
        queue.push(neighbor);
      }
    }
    return result;
  }
  DFS(source) {
    let stack = [source];
    let result = [];

    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current);

      for (let neighbor of this.graph[current]) {
        stack.push(neighbor);
      }
    }
    return result;
  }
}
var graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
let gf = new Graph(graph);
