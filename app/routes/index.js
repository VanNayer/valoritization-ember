import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findRecord('matrix', '52978713-8755-4338-a801-dfcb37ae71f4')
      .then(
      function (matrix) {
        return matrix;
      },
      function () {
        return null;
      }
    );
  }
});
