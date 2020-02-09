var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;

  };

  list.contains = function(target) {
    /*
    var isfound = false
    function finding() {

   if the obj's "value" is the target
    isfound = true
    else
      if the obj's "next" value is null
        return
      if the obj's "next" value is an object
        repeat this process with the obj's "next value"
    }

    return isfound
    */
    var isFound = false;
    var copyObj = Object.assign({}, list.head);

    var findingFn = function(nodeChain) {
      if (nodeChain.value === target) {
        isFound = true;
        return;
      } else {
        if (nodeChain.next === null) {
          return;
        } else {
          findingFn(nodeChain.next);
        }
      }
    };

    findingFn(copyObj);
    return isFound;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
