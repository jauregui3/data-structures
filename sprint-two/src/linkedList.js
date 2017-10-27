var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null) {
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var temp = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return temp;
  };

  list.contains = function(target) {
    var thisNode = this.head;

    while (thisNode !== null) {
      if (thisNode.value === target) {
        return true;
      } else {
        thisNode = thisNode.next;
      }
    }

    return false;
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