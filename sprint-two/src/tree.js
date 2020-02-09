var Tree = function(value) {
  var tree = {};

  tree.value = value;

  // your code here
  tree.children = [];

  tree.addChild = function(value) {
    var newTree = Tree(value);
    this.children.push(newTree);
  };

  tree.contains = function(target) {
    var isfound = false;
    var innerArray = tree.children.slice();

    var finding = function(array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].value === target) {
          isfound = true;
        } else {
          let childArray = array[i].children.slice();
          if (childArray.length > 0) {
            finding(childArray);
          } else {
            return;
          }
        }
      }
    };
    finding(innerArray);
    return isfound;
  };
  return tree;
};

var aTree = Tree();
aTree.addChild(5);

console.log(aTree.contains(5));


/*
 * Complexity: What is the time complexity of the above functions?
 */
