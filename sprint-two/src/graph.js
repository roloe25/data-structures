

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.name = node;
  newNode.links = {};
  this.storage.push(newNode);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var isfound = false;
  if (this.storage === undefined) {
    return false;
  }
  var copyStorage = this.storage.slice();

  var finding = function(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === node) {
        isfound = true;
      }
    }
  };
  finding(copyStorage);

  return isfound;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var copyStorage = this.storage.slice();

  var deleting = function(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === node) {
        delete array[i];
      }
    }
    if (array === undefined) {
      return [];
    }
  };

  var mod = deleting(copyStorage);
  this.storage = mod;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var foundFrom = undefined;
  var foundTo = undefined;

  //find the reference for the nodes
  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i].name === fromNode) {
      foundFrom = this.storage[i];
    } else if (this.storage[i].name === toNode) {
      foundTo = this.storage[i];
    }
  }
  //return  true if the nodes have links to each other
  return !!foundFrom.links[fromNode] && !!foundTo.links[toNode];

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var foundFrom = undefined;
  var foundTo = undefined;

  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i].name === fromNode) {
      foundFrom = this.storage[i];
    } else if (this.storage[i].name === toNode) {
      foundTo = this.storage[i];
    }
  }
  foundFrom.links[fromNode] = foundTo;
  foundTo.links[toNode] = foundFrom;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var foundFrom = undefined;
  var foundTo = undefined;

  for (let i = 0; i < this.storage.length; i++) {
    if (this.storage[i].name === fromNode) {
      delete this.storage[i].links[fromNode];
    } else if (this.storage[i].name === toNode) {
      delete this.storage[i].links[toNode];
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


