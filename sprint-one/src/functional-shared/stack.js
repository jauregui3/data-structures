var Stack = function() {
  var someInstance = {
    _size: 0
  };


  for (var prop in stackMethods) {
    someInstance[prop] = stackMethods[prop];
  }

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    //this.size() = value; ???
    var index = this.size();
    this[index] = value;

    this._size++;
  },

  pop: function() {
    var index = this.size() - 1;
    var temp = this[index];

    delete this[index];

    if (this._size > 0) {
      this._size--;
    }

    return temp;
  },

  size: function() {
    return this._size;
  }
};


var myStack = Stack();