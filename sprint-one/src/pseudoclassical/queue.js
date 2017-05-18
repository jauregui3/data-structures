var Queue = function() {
  this._size = 0;
};

Queue.prototype.enqueue = function (value) {
  this[this.size()] = value;
  this._size++;
};

Queue.prototype.dequeue = function () {
  var temp = this[0];

  for (var i = 0; i < this.size(); i++) {
    this[i] = this[i + 1];
  }

  delete this[i];

  if (this.size() > 0) {
    this._size--;
  }

  return temp;
};

Queue.prototype.size = function () {
  return this._size;
};