exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
      fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {

  },

  iterate : function(obj) {

  }
};
