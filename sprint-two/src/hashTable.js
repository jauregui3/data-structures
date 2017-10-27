var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

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
  // refactor this --delete tuple instead of bucket
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};