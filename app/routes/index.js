import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var growl = this.growl;
    return this.store.findRecord('matrix', '52978713-8755-4338-a801-dfcb37ae71f4').then(
      function (matrix) {
        return matrix;
      },
      function (warn) {
        growl.alert('No default matrix found in database: ' + warn);
        return null;
      }
    );
  }
});
