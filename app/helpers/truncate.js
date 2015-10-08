import Ember from 'ember';

export default Ember.Handlebars.helper('truncate', function(text, options){
  var limit = options.hash.limit || 46;
  if (text && text.length > limit){
    text = text.substr(0, limit - 3) + "...";
  }
  return text;
});
