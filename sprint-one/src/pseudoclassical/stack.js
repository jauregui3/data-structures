var Stack = function() {
  this._size =  0;
};

Stack.prototype.push = function(value) {
  this[this.size()] = value;
  this._size++;
};

Stack.prototype.pop = function() {
  var temp = this[this.size() - 1];

  if (this.size() > 0) {
    this._size--;
  }

  delete this.size() - 1;

  return temp;
};

Stack.prototype.size = function() {
  return this._size;
};