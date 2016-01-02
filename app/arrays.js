exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === item){
        arr.splice(i,1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
         if (arr[i] === item) {
          arr.splice(i, 1);
          i = i - 1;
         }
       }
    return arr;
  },

  append : function(arr, item) {
     arr.push(item);
     return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] === item) {
          count++;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var sortedArr = arr.sort();
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (sortedArr[i + 1] === sortedArr[i]) {
          if(results.indexOf(sortedArr[i]) < 0) {
            results.push(sortedArr[i]);
          }
        }
      }
    return results;
  },

  square : function(arr) {
    return arr.map(function (x) {
      return Math.pow(x, 2);
    });
  },

  findAllOccurrences : function(arr, target) {
    var results =[];
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === target){
        results.push(i);
      }
    }
    return results;
  }
};
