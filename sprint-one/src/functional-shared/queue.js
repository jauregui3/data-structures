var Queue = function() {
  var someInstance = {
    _size: 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.size()] = value;

    this._size++;
  },

  dequeue: function() {
    var temp = this[0];

    for (var i = 0; i < this.size(); i++) {
      this[i] = this[i + 1];
    }

    delete this[i];

    if (this.size() > 0) {
      this._size--;
    }

    return temp;
  },

  size: function() {
    return this._size;
  }
};


