var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// get will return the storage object
// get will return the storage object

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = new Array(k, v);

  var bucket = this._storage.get(index);
  if (bucket === undefined) {
    var newBucket = [];
    newBucket.push(tuple);
    this._storage.set(index, newBucket);
  } else {
    var updatedKey = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        updatedKey = true;
      }
    }

    if (!updatedKey) {
      bucket.push(tuple);
      this._storage.set(index, newBucket);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};









/*
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // hash function is getIndexBelowMaxForKey
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = [];
  var tuple = [];
  tuple.push(k, v);

  // insert key at index in storage
  // if index does not have bucket

  // get will return the storage object
  if (this._storage.storage[index] === undefined) {
    this._storage.set(index, bucket); // where bucket is an array
  }

  if (this._storage.storage[index][])

  this._storage.set(index, )     [index].push(tuple);
  // else push the key/val pair to the bucket



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
