var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance._size = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this[this.size()] = value;
    this._size++;
  },

  pop: function() {
    var temp = this[this.size() - 1];
    delete this.size() - 1;

    if (this.size() > 0) {
      this._size--;
    }

    return temp;
  },

  size: function() {
    return this._size;
  }
};

// Stack.prototype.push = function(value) {

// };

// Stack.prototype.pop = function() {

// };

// Stack.prototype.size = function() {

// };