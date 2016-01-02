exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return {
        then: function (onSuccess) {
          return onSuccess(value);
        }
    }
  },

  manipulateRemoteData : function(url) {
    return $.getJSON(url)
      .then(function (result) {
        return result.people.map(function (data) {
          return data.name;
        }).sort();
      });
  }
};
