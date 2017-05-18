var Queue = function() {
  var obj = Object.create(queueMethods);
  obj._size = 0;
  return obj;
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

    delete this[i + 1];

    if (this.size() > 0) {
      this._size--;
    }

    return temp;
  },

  size: function() {
    return this._size;
  }
};