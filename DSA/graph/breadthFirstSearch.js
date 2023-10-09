"use strict";
var graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
var source = "a";
function BFS(graph, source) {
  let queue = [source];
  let result = [];
  while (queue.length > 0) {
    let current = queue.shift();
    result.push(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return result;
}
