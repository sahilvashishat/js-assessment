exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var data = (num >>> 0).toString(2);
    var newBit = data.length - bit;
    return parseInt(data[newBit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var appendZero =  8 - (num >>> 0).toString(2).length;
    var data='';
    for (var i = 0; i<appendZero; i++){
      data += '0';
    }
    return data + (num >>> 0).toString(2);
  },

  multiply: function(a, b) {

  }
};
