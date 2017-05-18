var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;

  var traverseTree = function(root) {
    if (root.value === target) {
      result = true;
    } else {
      for (var i = 0; i < root.children.length; i++) {
        traverseTree(root.children[i]);
      }
    }
  };

  traverseTree(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
