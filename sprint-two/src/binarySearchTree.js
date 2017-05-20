var BinarySearchTree = function(value) {
  this._value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value <= this._value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;

  var searchTree = function (root) {
    if (value === root._value) {
      result = true;
    } else if (value < root._value && root.left !== undefined) {
      if(root.left.contains(value)) {
        result = true;
      }
    } else if (value > root._value && root.right !== undefined) {
      if (root.right.contains(value)) {
        result = true;
      }
    }
  }

  searchTree(this);

  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this._value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  } else if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
