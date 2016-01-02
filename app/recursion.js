exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  
  },

  permute: function(arr) {

  },

  fibonacci : function(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n -1) + fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {

  }
};
