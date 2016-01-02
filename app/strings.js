exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var output = str[0];;
    var count = 1;
    for ( var i = 1; i < str.length; i++ ){
     if(str[i] !== str[i-1]){
        count = 0;
      } else if(count < amount){
        output += str[i];
        count++;
      }
      if(str[i] !== str[i-1] && count < amount){
        output += str[i];
         count++;
       }
    }
    //console.log(output);
    return output;
  },

  wordWrap: function(str, cols) {
    

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
