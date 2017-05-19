var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

  var tuple = function(key, value) {
    var obj = [];
    obj.push(key, value);
    return obj;
  }
};

HashTable.prototype.insert = function(k, v) {
  // hash function is getIndexBelowMaxForKey
  var index = getIndexBelowMaxForKey(k, this._limit);
  // insert key at index in storage
  this._storage.set(index, tuple(k, v));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleCollection = this._storage.get(index);
  for (var i = 0; i < tupleCollection.length; i++) {
    if (k = tupleCollection[i][0]) {
      return tupleCollection[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};





// [1, , 3, , , 6, 7, 8]

// set > eval to 6

/*
 * Complexity: What is the time complexity of the above functions?
 */
