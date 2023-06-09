class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }

  addEdge(nodeOne, nodeTwo) {
    this.adjacentList[nodeOne].push(nodeTwo);
    this.adjacentList[nodeTwo].push(nodeOne);
  }
}

const myGraph = new Graph();