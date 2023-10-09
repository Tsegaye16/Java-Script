//"use strict";
var graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
var source = "a";
function DFS(graph, source) {
  let stack = [source];
  let result = [];
  //stack.push(source);
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current);
    //result.push(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  return result;
}
